/*
 * :file description: 
 * :name: /firethorn/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 08:53:28
 * :last editor: 张德志
 * :date last edited: 2024-08-30 09:29:17
 */
/* eslint-disable */
const menus = import.meta.glob("@/lib/*/*/index.ts");
const demos = import.meta.glob("@/lib/*/*/demo/*.ts");

async function loadModuleMap(modules) {
  const modulePaths = Object.keys(modules);
  const modulePromises = modulePaths.map((path) => modules[path]());

  try {
    const loadedModules = await Promise.all(modulePromises);

    const moduleMap = modulePaths.reduce((acc, path, index) => {
      acc[path] = loadedModules[index];
      return acc;
    }, {});

    return moduleMap;
  } catch (error) {
    console.error("Error loading modules:", error);
  }
}

async function loadMenus() {
  const moduleMap = await loadModuleMap(menus);
  const group = {};

  Object.entries(moduleMap).forEach(([path, module]) => {
    const pathArr = path
      .replace("/src/lib/", "")
      .replace("/index.ts", "")
      .split("/");
    const itemName = pathArr.pop();
    const itemGroup = pathArr.join("-");
    if (!group[itemGroup]) {
      group[itemGroup] = [];
    }
    group[itemGroup].push({
      path,
      name: itemName,
      module,
    });
  });

  return group;
}

async function loadDemos() {
  const moduleMap = await loadModuleMap(demos);
  const group = {};
  Object.entries(moduleMap).forEach(([path, module]) => {
    const pathArr = path
      .replace("/src/lib/", "")
      .replace("demo/", "")
      .replace(".ts", "")
      .split("/");
    const demoName = pathArr.pop();
    const itemName = pathArr.pop();
    const itemGroup = pathArr.pop();
    if (!group[itemGroup]) {
      group[itemGroup] = {};
    }
    if (!group[itemGroup][itemName]) {
      group[itemGroup][itemName] = [];
    }
    group[itemGroup][itemName].push({
      path,
      name: demoName,
      module,
    });
  });
  return group;
}

function pushInMenu(menuGroup, demoGroup) {
  function addMenu(groupName, menuName, onclick) {
    const p = document.createElement("p");
    p.innerText = menuName || groupName;
    if (onclick) {
      p.onclick = onclick;
      p.style = "padding-left:30px;cursor:pointer;";
    }
    document.getElementById("menu").appendChild(p);

    const lastRun = getLastRun();
    if (lastRun && menuName) {
      const { group, menu } = lastRun;
      if (group === groupName && menu === menuName) {
        onclick();
      }
    }
  }

  function addDemo(groupName, itemName, name, module) {
    const div = document.createElement("div");
    div.innerText = name;
    function onclick() {
      document.getElementById("cesiumContainer").innerHTML = "";
      module.default();
      memoLastRun({
        group: groupName,
        menu: itemName,
        demo: name,
      });
    }
    div.onclick = onclick;
    div.style =
      "display:inline-block;min-width:100px;height:48px;line-height:48px;border:1px solid #000;font-size:14px;text-align:center;cursor:pointer;";
    document.getElementById("demos").appendChild(div);

    const lastRun = getLastRun();
    if (lastRun) {
      const { group, menu, demo } = lastRun;
      if (group === groupName && menu === itemName && demo === name) {
        onclick();
      }
    }
  }

  Object.entries(menuGroup).forEach(([groupName, itemInfoArr]) => {
    addMenu(groupName);
    itemInfoArr.forEach((itemInfo) => {
      const itemName = itemInfo.name;
      addMenu(groupName, itemName, function () {
        const demoInfoArr = demoGroup[groupName][itemName];
        document.getElementById("demos").innerHTML = "";
        demoInfoArr.forEach((demoInfo) => {
          addDemo(groupName, itemName, demoInfo.name, demoInfo.module);
        });
      });
    });
  });
}

function memoLastRun(info) {
  window.sessionStorage.setItem("firethorn", JSON.stringify(info));
}

function getLastRun() {
  const info = window.sessionStorage.getItem("firethorn");
  return info ? JSON.parse(info) : null;
}

async function run() {
  const menuGroup = await loadMenus();
  const demoGroup = await loadDemos();
  pushInMenu(menuGroup, demoGroup);
}

run();
