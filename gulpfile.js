/**
 @author : ershing
 **/

'use strict'

import fse from 'fs-extra'
import path from 'path'
import gulp from 'gulp'
import esbuild from 'esbuild'
import concat from 'gulp-concat'
import clean from 'gulp-clean'
import javascriptObfuscator from 'gulp-javascript-obfuscator'
import startServer from './server.js'
import inlineImage from 'esbuild-plugin-inline-image'

import {
  sassPlugin
} from 'esbuild-sass-plugin'
import {
  glsl
} from 'esbuild-plugin-glsl'
import shell from 'shelljs'
import chalk from 'chalk'

const dt_common_path = './node_modules/@starfruitcloud/digitwin-common'

const packageJson = fse.readJsonSync('./package.json')

const c_packageJson = fse.readJsonSync(
  path.join(dt_common_path, 'package.json')
)

const obfuscatorConfig = {
  compact: true, //压缩代码
  identifierNamesGenerator: 'hexadecimal', //标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)
  renameGlobals: false, //是否启用全局变量和函数名称的混淆
  rotateStringArray: true, //通过固定和随机（在代码混淆时生成）的位置移动数组。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
  selfDefending: true, //混淆后的代码,不能使用代码美化,同时需要配置 compact:true;
  stringArray: true, //删除字符串文字并将它们放在一个特殊的数组中
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.75,
  transformObjectKeys: false,
  unicodeEscapeSequence: false, //允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。
}

const buildConfig = {
  bundle: true,
  color: true,
  legalComments: `inline`,
  logLimit: 0,
  target: `es2019`,
  minify: false,
  sourcemap: false,
  write: true,
  logLevel: 'info',
  plugins: [
    inlineImage({
      limit: -1,
    }),
    glsl(),
    sassPlugin(),
  ],
}

function getTime() {
  let now = new Date()
  let m = now.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = now.getDate()
  d = d < 10 ? '0' + d : d
  return `${now.getFullYear()}-${m}-${d}`
}

async function buildCSS(options) {
  await esbuild.build({
    ...buildConfig,
    minify: options.minify,
    entryPoints: ['src/themes/index.scss'],
    outfile: path.join('dist', 'dt.min.css'),
  })
}

function readDirectory(dirPath) {
  const basename = path.basename(dirPath)

  const [indexStr, name] = basename.split('-');
  const index = Number(indexStr) - 1;

  const result = {
    type: 'group',
  };

  if (Number.isNaN(index)) {
    result.name = basename
  } else {
    result.index = index;
    result.name = name;
  }

  result.label = undefined;

  const items = fse.readdirSync(dirPath);

  items.forEach((item) => {
    const fullPath = path.join(dirPath, item);
    const stat = fse.statSync(fullPath);

    if (stat.isDirectory()) {
      if (path.basename(fullPath) === 'demo') {
        const demo = readDirectory(fullPath);
        if (demo.examples) {
          demo.children = demo.examples.map(obj => ({
            ...obj,
            type: 'demo'
          }))
          delete demo.examples;
        }
        result.demo = demo;
        return;
      }
      const res = readDirectory(fullPath)
      if (res.isLeaf) {
        if (!result.examples) {
          result.examples = []
        }
      } else {
        if (!result.children) {
          result.children = []
        }
      }
      result[res.isLeaf ? 'examples' : 'children'][res.index] = res;
    } else if (item === 'index.json') {
      Object.assign(result, fse.readJsonSync(fullPath))
    } else {
      if (!result.files) {
        result.files = {}
      }
      result.files[item] = fullPath;
    }
  });

  if (!result.children && !result.examples) {
    result.isLeaf = true
    result.type = 'example'
  }

  return result;
}

function createAddonExampleTree(tree) {
  const hasKeys = ['name', 'label', 'children', 'examples']
  return tree?.map(info => {
    return Object.entries(info).reduce((pre, [k, v]) => {
      if (hasKeys.includes(k)) {
        if (['children', 'examples'].includes(k)) {
          pre[k] = createAddonExampleTree(v)
        } else {
          pre[k] = v
        }
      }
      return pre;
    }, {})
  })
}

function getAddonsEntry(tree) {
  const addonPath = [];
  tree?.forEach(info => {
    if (info.children) {
      addonPath.push(...getAddonsEntry(info.children))
    } else if (info.examples) {
      addonPath.push(...getAddonsEntry(info.examples))
    } else if (info.isLeaf) {
      const filePath = info.files?. ['index.ts'];
      if (filePath) {
        addonPath.push({
          name: info.name,
          path: filePath
        })
      }
    }
  })
  return addonPath
}

function getAddonEntryFile(addons) {
  let content = '';
  addons.forEach(info => {
    content += `\n// @ts-ignore\nexport { default as ${info.name} } from "${info.path.replace(/\\/g, '/').replace('src/addons','.')}"\n`
  })
  return content;
}

function getAddonExamples(tree) {
  const config = [];
  tree?.forEach(info => {
    if (info.children) {
      config.push(...getAddonExamples(info.children))
    } else if (info.examples) {
      config.push(...getAddonExamples(info.examples))
    } else if (info.demo) {
      if (info.demo.children) {
        config.push(...getAddonExamples(info.demo.children))
      }
    } else if (info.type === 'demo') {
      const demoPath = info.files?. ['index.ts']
      if (demoPath) {
        config.push(demoPath)
      }
    }
  })
  return config;
}

async function buildModules(options) {
  const dtPath = path.join('src', 'DT.js')
  const content = await fse.readFile(path.join('src', 'index.js'), 'utf8')
  const addonDirPath = path.join('src', 'addons')
  const addonEntryPath = path.join(addonDirPath, 'index.ts')
  const addonConfigPath = path.join('dist', 'index.json')
  const tree = readDirectory(addonDirPath)
  const addonTree = createAddonExampleTree(tree.children)

  await fse.ensureFile(dtPath)

  const exportVersion = `export const VERSION = '${packageJson.version}'`

  const cmdOut_content = await fse.readFile(
    path.join('src', 'copyright', 'cmdOut.js'),
    'utf8'
  )

  const cmdOutFunction = `
        function __cmdOut() {
          ${cmdOut_content
      .replace('{{__VERSION__}}', packageJson.version)
      .replace('{{__TIME__}}', getTime())
      .replace(
        '{{__ENGINE_VERSION__}}',
        c_packageJson.devDependencies['@cesium/engine'].replace('^', '')
      )}
    }`

  const importNamespace = `
      import { Cesium , Supercluster } from '@starfruitcloud/digitwin-common'
  `
  const exportNamespace = `
      export const __namespace = {
          Cesium :  Cesium,
          Supercluster: Supercluster
      }
  `

  const exportDefault = `
    export default {
      config,
      ready,
      __namespace,
    }
  `

  // addon 部分
  await fse.outputFile(
    addonConfigPath,
    JSON.stringify(addonTree, null, 2), {
      encoding: 'utf8',
    }
  )
  const addonsEntry = getAddonsEntry(tree.children);
  const entryFileContent = getAddonEntryFile(addonsEntry)
  const exampleTree = getAddonExamples(tree.children);
  await fse.outputFile(
    addonEntryPath,
    entryFileContent, {
      encoding: 'utf8',
    }
  )
  await regenerateAddonExample(exampleTree);

  // Build IIFE
  if (options.iife) {
    await fse.outputFile(
      dtPath,
      `
        ${content}
        ${cmdOutFunction}
        ${exportVersion}
      `, {
        encoding: 'utf8',
      }
    )
    await esbuild.build({
      ...buildConfig,
      format: 'iife',
      globalName: 'DT',
      entryPoints: ['src/DT.js'],
      outfile: path.join('dist', 'modules-iife.js'),
    })
    await esbuild.build({
      ...buildConfig,
      format: 'iife',
      entryPoints: ['src/addons/index.ts'],
      outfile: path.join('dist', 'addons.js'),
    })
  }

  // Build Node、
  if (options.node) {
    await fse.outputFile(
      dtPath,
      `
        ${importNamespace}
        ${content}
        ${exportVersion}
        ${exportNamespace}
        ${cmdOutFunction}
        ${exportDefault}
      `, {
        encoding: 'utf8',
      }
    )
    // build
    await esbuild.build({
      ...buildConfig,
      format: 'esm',
      platform: 'node',
      define: {
        TransformStream: 'null',
      },
      outdir: 'dist',
      entryPoints: {
        'index': 'src/DT.js',
        'addons': 'src/addons/index.ts'
      },
      entryNames: '[name]'
    })
  }

  // remove file
  await fse.remove(dtPath)
  await fse.remove(addonEntryPath)
}

async function combineJs(options) {
  // combine for iife
  if (options.iife) {
    if (options.obfuscate) {
      await gulp
        .src('dist/modules-iife.js')
        .pipe(javascriptObfuscator(obfuscatorConfig))
        .pipe(gulp.src(path.join(dt_common_path, 'dist', '__namespace.js')))
        .pipe(concat('dt.min.js'))
        .pipe(gulp.dest('dist'))
        .on('end', () => {
          addCopyright(options)
          deleteTempFile()
        })
    } else {
      await gulp
        .src([
          'dist/modules-iife.js',
          path.join(dt_common_path, 'dist', '__namespace.js'),
        ])
        .pipe(concat('dt.min.js'))
        .pipe(gulp.dest('dist'))
        .on('end', () => {
          addCopyright(options)
          deleteTempFile()
        })
    }
  }

  // combine for node
  if (options.node && options.obfuscate) {
    await gulp
      .src('dist/index.js')
      .pipe(
        javascriptObfuscator({
          ...obfuscatorConfig,
          target: 'browser-no-eval',
        })
      )
      .pipe(gulp.dest('dist'))
      .on('end', () => {
        addCopyright(options)
      })
  }
}

async function copyAssets() {
  await fse.emptyDir('dist/resources')
  await gulp
    .src(dt_common_path + '/dist/resources/**', {
      nodir: true
    })
    .pipe(gulp.dest('dist/resources'))
}

async function addCopyright(options) {
  let header = await fse.readFile(
    path.join('src', 'copyright', 'header.js'),
    'utf8'
  )
  header = header
    .replace('{{__VERSION__}}', packageJson.version)
    .replace('{{__AUTHOR__}}', packageJson.author)
    .replace('{{__REPOSITORY__}}', packageJson.repository)

  if (options.iife) {
    let filePath = path.join('dist', 'dt.min.js')
    const content = await fse.readFile(filePath, 'utf8')
    await fse.outputFile(filePath, `${header}${content}`, {
      encoding: 'utf8'
    })
  }

  if (options.node) {
    let filePath = path.join('dist', 'index.js')
    const content = await fse.readFile(filePath, 'utf8')
    await fse.outputFile(filePath, `${header}${content}`, {
      encoding: 'utf8'
    })
  }
}

async function deleteTempFile() {
  await gulp.src(['dist/modules-iife.js'], {
    read: false
  }).pipe(clean())
}

async function regenerate(option, content) {
  await fse.remove('dist/index.js')
  await fse.remove('dist/index.json')
  await fse.remove('dist/dt.min.js')
  await fse.remove('dist/dt.min.css')
  await buildModules(option)
  await combineJs(option)
  await buildCSS(option)
}

function getNamePath(pathStrArr) {
  const info = pathStrArr.reduce((pre, cur) => {
    const curDir = path.join(pre.dir, cur);
    const curName = fse.readJSONSync(path.join(curDir, 'index.json'))?.name ?? cur.split('-')[1];
    pre.dir = curDir
    pre.names.push(curName)
    return pre
  }, {
    dir: path.join('src', 'addons'),
    names: []
  })
  return info.names;
}

async function regenerateAddonExample(filePaths) {

  const template = `<!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>dt-example</title>
      <link href='/index.css' type='text/css' rel='stylesheet'>
      <link href='/libs/dt-sdk/dt.min.css' type='text/css' rel='stylesheet'>
    </head>
    <body>
      <div id="viewer-container" class="viewer-container"></div>
      <script type="module">
        DEMO
      </script>
    </body>

    </html>`

  await Promise.all(filePaths.map(async str => {
    const pts = str.replace('src\\addons\\', '').split('\\')
    const demoIndex = pts.indexOf('demo');
    const dirs = pts.slice(0, demoIndex);
    const nameDirs = getNamePath(dirs);
    const demoFileName = nameDirs.pop() + '.html';
    const demoDistDir = path.join('addon-examples', ...nameDirs)

    await fse.ensureDir(demoDistDir);
    const demoFile = (await fse.readFile(str, 'utf8')).replace('@starfruitcloud/digitwin/addons', '/libs/dt-sdk/addons.js')
    const demoContent = template.replace('DEMO', demoFile);
    await fse.remove(demoDistDir)
    await fse.outputFile(
      path.join(demoDistDir, demoFileName),
      demoContent, {
        encoding: 'utf8',
      }
    )
  }))

}

export const server = gulp.series(startServer)

export const dev = (options) => gulp.series(
  () => copyAssets(),
  () => {
    shell.echo(chalk.yellow('============= start dev =============='))
    const watcher = gulp.watch('src', {
      persistent: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100,
      },
    })
    watcher
      .on('ready', async () => {
        await regenerate(options)
        await startServer(options.node ? 'addon-examples' : 'api-examples')
      })
      .on('change', async (changeFilePath) => {
        let now = new Date().getTime()
        try {
          if (changeFilePath.includes('demo')) {
            await regenerateAddonExample([changeFilePath])
          } else {
            await regenerate(options)
          }

          shell.echo(
            chalk.green(`regenerate lib takes ${new Date().getTime() - now} ms`)
          )
        } catch (e) {
          shell.error(e)
        }
      })
    return watcher
  }
)

export const devAPI = dev({
  iife: true
})

export const devADDON = dev({
  node: true
})

export const buildSDK = gulp.series(
  () => buildModules({
    iife: true
  }),
  () => combineJs({
    iife: true
  }),
  () => buildCSS({
    minify: true
  }),
  copyAssets
)

export const buildNPM = gulp.series(
  () => buildModules({
    node: true
  }),
  () => combineJs({
    node: true
  }),
  () => buildCSS({
    minify: true
  }),
  copyAssets
)

export const buildAll = gulp.series(
  () => buildModules({
    iife: true
  }),
  () => combineJs({
    iife: true
  }),
  () => buildModules({
    node: true
  }),
  () => combineJs({
    node: true
  }),
  () => buildCSS({
    minify: true
  }),
  copyAssets
)

export const buildRelease = gulp.series(
  () => buildModules({
    iife: true
  }),
  () => combineJs({
    iife: true,
    obfuscate: true
  }),
  () => buildModules({
    node: true
  }),
  () => combineJs({
    node: true,
    obfuscate: true
  }),
  () => buildCSS({
    minify: true
  }),
  copyAssets
)
