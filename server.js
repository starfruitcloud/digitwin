/**
 * @Author : ershing
 */

import express from 'express';
import portfinder from 'portfinder';
import fse from 'fs-extra';
import shell from 'shelljs';
import chalk from 'chalk';
import chokidar from 'chokidar';
import { WebSocketServer } from 'ws';
import path from 'node:path'

export default function start(dir) {
  let dist = 'dist';
  const server = express();
  portfinder.setBasePort(8081);
  const isAddon = dir.includes('addon');

  fse.exists(dist, (exists) => {
    if (exists) {
      portfinder.getPort((err, port) => {
        // 启动 Express 服务器
        const httpServer = server.listen(port, () => {
          shell.echo('\nExamples running at: ');
          shell.echo('- Local:  ' + chalk.yellow(`http://localhost:${port}`));
          shell.echo('\n');
        });

        // 设置静态文件
        server.use('/libs/dt-sdk/', express.static(dist));
        server.use(express.static(dir));

        // 创建 WebSocket 服务器
        const wss = new WebSocketServer({ server: httpServer });

        // 监听 WebSocket 连接
        wss.on('connection', (ws) => {
          console.log('WebSocket connection established');
        });

        function onPathChange(path) {
          shell.echo(chalk.green(`File ${path} has changed, reloading...`));

          // 通知所有连接的客户端刷新页面
          wss.clients.forEach((client) => {
            if (client.readyState === client.OPEN) {
              client.send('reload');
            }
          });
        }

        // 使用 chokidar 监视文件变化
        if (isAddon) {
          const dirWatcher = chokidar.watch(dir, {
            persistent: true,
            ignoreInitial: true,
          });
          dirWatcher.on('change', onPathChange);
        }

        const distWatcher = chokidar.watch(dist, {
          persistent: true,
          ignoreInitial: true,
          ignored: [path.join(dist, 'resources')]
        });
        distWatcher.on('change', onPathChange);

      });
    } else {
      shell.echo(chalk.red(`Please run build first`));
    }
  });
}
