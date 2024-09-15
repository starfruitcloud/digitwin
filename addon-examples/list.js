const EXAMPLELIST = [
    {
      "name": "start",
      "label": "快速开始",
      "children": [
        {
          "name": "init",
          "label": "创建地球",
          "examples": [
            {
              "name": "create",
              "label": "开始构建"
            },
            {
              "name": "coord",
              "label": "瓦片坐标信息"
            },
            {
              "name": "customCesium",
              "label": "自定义Cesium"
            }
        ]
        },
        {
          "name": "setting",
          "label": "场景设置",
          "examples": [
            {
              "name": "base",
              "label": "基础"
            },
            {
              "name": "camera",
              "label": "相机"
            },
            {
              "name": "baseLayerParam",
              "label": "地图参数"
            },
            {
              "name": "globe",
              "label": "地球"
            },
            {
              "name": "skyBox",
              "label": "天空盒"
            },
            {
              "name": "groundSkyBox",
              "label": "近地天空盒"
            },
            {
              "name": "background",
              "label": "自定义背景"
            },
            {
              "name": "destroy",
              "label": "场景销毁"
            },
            {
              "name": "exportScene",
              "label": "场景导出"
            }
          ]
        },
        {
          "name": "widget",
          "label": "地图组件",
          "examples": [
            {
              "name": "compass",
              "label": "罗盘"
            },
            {
              "name": "zoomController",
              "label": "层级控制"
            },
            {
              "name": "distanceLegend",
              "label": "比例尺"
            },
            {
              "name": "locationbar",
              "label": "工具栏"
            },
            {
              "name": "hawkeyeMap",
              "label": "鹰眼图"
            },
            {
              "name": "loadingMask",
              "label": "加载蒙层",
              "suffix": "gif"
            },
            {
              "name": "contextmenu",
              "label": "右击菜单"
            },
            {
              "name": "popup",
              "label": "信息框"
            },
            {
              "name": "tooltip",
              "label": "提示框"
            },
            {
              "name": "sceneSplit",
              "label": "场景分割"
            }
          ]
        },
        {
          "name": "event",
          "label": "场景事件",
          "examples": [
            {
              "name": "sceneHooks",
              "label": "场景生命周期钩子"
            },
            {
              "name": "viewerMouse",
              "label": "场景鼠标事件"
            },
            {
              "name": "layerMouse",
              "label": "矢量图层鼠标事件"
            },
            {
              "name": "overlayMouse",
              "label": "要素鼠标事件"
            },
            {
              "name": "camera",
              "label": "相机事件"
            },
            {
              "name": "clock",
              "label": "时钟事件"
            }
          ]
        }
      ]
    },
    {
      "name": "baselayer",
      "label": "基础地图",
      "children": [
        {
          "name": "online",
          "label": "在线地图",
          "examples": [
            {
              "name": "amap",
              "label": "高德"
            },
            {
              "name": "amapNoOffset",
              "label": "高德(无偏移)"
            },
            {
              "name": "arcgis",
              "label": "Arcgis"
            },
            {
              "name": "baidu",
              "label": "百度"
            },
            {
              "name": "baiduNoOffset",
              "label": "百度(无偏移)"
            },
            {
              "name": "geovis",
              "label": "星图地图(需要key)"
            },
            {
              "name": "google",
              "label": "谷歌"
            },
            {
              "name": "googleNoOffset",
              "label": "谷歌(无偏移)"
            },
            {
              "name": "tdt",
              "label": "天地图(需要key)"
            },
            {
              "name": "tencent",
              "label": "腾讯"
            }
          ]
        },
        {
          "name": "offline",
          "label": "离线地图",
          "examples": [
            {
              "name": "blue",
              "label": "单图片(蓝色)"
            },
            {
              "name": "img",
              "label": "影像图"
            },
            {
              "name": "day",
              "label": "单图片"
            },
            {
              "name": "night",
              "label": "单图片(夜晚)"
            }
          ]
        },
        {
          "name": "terrain",
          "label": "地形设置",
          "examples": [
            {
              "name": "terCh",
              "label": "中国地形"
            },
            {
              "name": "terExaggeration",
              "label": "地形夸张"
            }
          ]
        }
      ]
    },
    {
      "name": "layer",
      "label": "要素图层",
      "examples": [
        {
          "name": "vector",
          "label": "矢量图层"
        },
        {
          "name": "tileset",
          "label": "3DTiles图层"
        },
        {
          "name": "geojson",
          "label": "GeoJson图层"
        },
        {
          "name": "html",
          "label": "Html图层"
        },
        {
          "name": "clusterCircle",
          "label": "聚合",
          "suffix": "gif"
        },
        {
          "name": "clusterClustering",
          "label": "聚合(聚合样式)",
          "suffix": "gif"
        },
        {
          "name": "dynamic",
          "label": "动态图层",
          "suffix": "gif"
        },
        {
          "name": "czml",
          "label": "Czml图层",
          "suffix": "gif"
        },
        {
          "name": "graticule",
          "label": "经纬网格图层"
        }
      ]
    },
    {
      "name": "overlay",
      "label": "矢量要素",
      "children": [
        {
          "name": "point",
          "label": "点位要素",
          "examples": [
            {
              "name": "base",
              "label": "基本点"
            },
            {
              "name": "icon",
              "label": "图标点"
            },
            {
              "name": "text",
              "label": "文字点"
            },
            {
              "name": "iconM",
              "label": "图标点(大量)"
            },
            {
              "name": "iconCustom",
              "label": "自定义图标点"
            },
            {
              "name": "textCustom",
              "label": "自定义文字点"
            }
          ]
        },
        {
          "name": "polyline",
          "label": "线状要素",
          "examples": [
            {
              "name": "base",
              "label": "基本线"
            },
            {
              "name": "material",
              "label": "材质线"
            },
            {
              "name": "trail",
              "label": "颜色轨迹线",
              "suffix": "gif"
            },
            {
              "name": "imageTrail",
              "label": "图片轨迹线",
              "suffix": "gif"
            },
            {
              "name": "flow",
              "label": "流动线",
              "suffix": "gif"
            },
            {
              "name": "flicker",
              "label": "闪烁线",
              "suffix": "gif"
            },
            {
              "name": "lighting",
              "label": "发光线"
            },
            {
              "name": "lightingTrail",
              "label": "发光轨迹线",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "polygon",
          "label": "面状要素",
          "examples": [
            {
              "name": "base",
              "label": "基本面"
            },
            {
              "name": "height",
              "label": "高度面"
            },
            {
              "name": "holes",
              "label": "含洞面"
            },
            {
              "name": "extruded",
              "label": "拉升面"
            }
          ]
        },
        {
          "name": "circle",
          "label": "圆形要素",
          "examples": [
            {
              "name": "base",
              "label": "圆点"
            },
            {
              "name": "dynamic",
              "label": "动画圆",
              "suffix": "gif"
            },
            {
              "name": "wave",
              "label": "波纹圆",
              "suffix": "gif"
            },
            {
              "name": "fade",
              "label": "圆(逐渐消逝)",
              "suffix": "gif"
            },
            {
              "name": "blur",
              "label": "模糊圆",
              "suffix": "gif"
            },
            {
              "name": "diffuse",
              "label": "扩散圆",
              "suffix": "gif"
            },
            {
              "name": "spiral",
              "label": "螺旋圆",
              "suffix": "gif"
            },
            {
              "name": "pulse",
              "label": "脉冲圆",
              "suffix": "gif"
            },
            {
              "name": "vary",
              "label": "多彩圆",
              "suffix": "gif"
            },
            {
              "name": "radarLine",
              "label": "雷达线",
              "suffix": "gif"
            },
            {
              "name": "radarPic",
              "label": "图片雷达",
              "suffix": "gif"
            },
            {
              "name": "radarWave",
              "label": "波纹雷达",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "others",
          "label": "其他要素",
          "examples": [
            {
              "name": "html",
              "label": "html点"
            },
            {
              "name": "wall",
              "label": "基础墙体"
            },
            {
              "name": "wallTrail",
              "label": "流动墙体",
              "suffix": "gif"
            },
            {
              "name": "wallImageTrail",
              "label": "流动图片墙体",
              "suffix": "gif"
            },
            {
              "name": "plane",
              "label": "基础平面"
            },
            {
              "name": "ellipsoid",
              "label": "基础球体"
            },
            {
              "name": "ellipsoidTrail",
              "label": "轨迹球体",
              "suffix": "gif"
            },
            {
              "name": "cylinder",
              "label": "基础柱体"
            },
            {
              "name": "dynamicBillboard",
              "label": "动态图标",
              "suffix": "gif"
            },
            {
              "name": "dynamicModel",
              "label": "动态模型",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "primitive",
          "label": "图元要素",
          "examples": [
            {
              "name": "point",
              "label": "点"
            },
            {
              "name": "polyline",
              "label": "线"
            },
            {
              "name": "flowLine",
              "label": "流动线",
              "suffix": "gif"
            },
            {
              "name": "vLine",
              "label": "流动线(竖)",
              "suffix": "gif"
            },
            {
              "name": "billboard",
              "label": "图标"
            },
            {
              "name": "billboardM",
              "label": "图标图元(大量)"
            },
            {
              "name": "bounceBillboard",
              "label": "跳动图标",
              "suffix": "gif"
            },
            {
              "name": "label",
              "label": "标签"
            },
            {
              "name": "bounceLabel",
              "label": "跳动标签",
              "suffix": "gif"
            },
            {
              "name": "scanCircle",
              "label": "扫描圆",
              "suffix": "gif"
            },
            {
              "name": "wallDiffuse",
              "label": "扩散墙",
              "suffix": "gif"
            },
            {
              "name": "elecEllipsoid",
              "label": "电弧球体",
              "suffix": "gif"
            },
            {
              "name": "lightCylinder",
              "label": "光锥图元",
              "suffix": "gif"
            },
            {
              "name": "cloud",
              "label": "云图元"
            },
            {
              "name": "water",
              "label": "流动水面",
              "suffix": "gif"
            },
            {
              "name": "video",
              "label": "视频",
              "suffix": "gif"
            }



          ]
        }
      ]
    },
    {
      "name": "model",
      "label": "模型要素",
      "children": [
        {
          "name": "gltf",
          "label": "通用模型",
          "examples": [
            {
              "name": "vector",
              "label": "模型（矢量）"
            },
            {
              "name": "vectorDynamic",
              "label": "动画模型（矢量）",
              "suffix": "gif"
            },
            {
              "name": "primitive",
              "label": "模型（图元）"
            }
          ]
        },
        {
          "name": "3dtiles",
          "label": "场景模型",
          "examples": [
            {
              "name": "3dmax",
              "label": "人工建模"
            },
            {
              "name": "osgb",
              "label": "倾斜摄影"
            },
            {
              "name": "shp",
              "label": "矢量白膜"
            },
            {
              "name": "shpCustomShader",
              "label": "矢量白膜(自定义shader)",
              "suffix": "gif"
            },
            {
              "name": "shpStyleAndShader",
              "label": "矢量白膜(样式+shader)",
              "suffix": "gif"
            }
          ]
        }
      ]
    },
    {
      "name": "scene-ext",
      "label": "场景扩展",
      "children": [
        {
          "name": "tools",
          "label": "场景工具",
          "examples": [
            {
              "name": "plot",
              "label": "要素标绘"
            },
            {
              "name": "measure",
              "label": "测量工具"
            }
          ]
        },
        {
          "name": "animation",
          "label": "场景动画",
          "examples": [
            {
              "name": "globeRotate",
              "label": "地球自转",
              "suffix": "gif"
            },
            {
              "name": "aroundPoint",
              "label": "绕点环绕",
              "suffix": "gif"
            },
            {
              "name": "aroundView",
              "label": "相机环绕",
              "suffix": "gif"
            },
            {
              "name": "flying",
              "label": "定点巡航",
              "suffix": "gif"
            },
            {
              "name": "roamingPath",
              "label": "路径漫游",
              "suffix": "gif"
            },
            {
              "name": "roamingKeyboard",
              "label": "键盘漫游",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "effect",
          "label": "场景效果",
          "examples": [
            {
              "name": "weather",
              "label": "天气效果"
            },
            {
              "name": "circleScan",
              "label": "扫描圈",
              "suffix": "gif"
            },
            {
              "name": "radarScan",
              "label": "雷达扫描",
              "suffix": "gif"
            },
            {
              "name": "bloom",
              "label": "泛光效果"
            },
            {
              "name": "brightness",
              "label": "场景明亮"
            },
            {
              "name": "depthOfField",
              "label": "景深"
            },
            {
              "name": "silhouette",
              "label": "轮廓"
            },
            {
              "name": "blackAndWhite",
              "label": "黑白"
            },
            {
              "name": "nightVision",
              "label": "夜视场景"
            },
            {
              "name": "lensFlare",
              "label": "镜头耀斑"
            }
          ]
        },
        {
          "name": "track",
          "label": "历史轨迹",
          "examples": [
            {
              "name": "track",
              "label": "轨迹漫游",
              "suffix": "gif"
            },
            {
              "name": "trackClampToGround",
              "label": "轨迹贴地",
              "suffix": "gif"
            },
            {
              "name": "trackClampToTileset",
              "label": "轨迹贴模型",
              "suffix": "gif"
            },
            {
              "name": "trackEvent",
              "label": "轨迹点位事件",
              "suffix": "gif"
            }
          ]
        }
      ]
    },
    {
      "name": "analysis",
      "label": "场景分析",
      "children": [
        {
          "name": "model-editor",
          "label": "模型定位",
          "examples": [
            {
              "name": "gltf",
              "label": "单体模型编辑"
            },
            {
              "name": "primitive",
              "label": "模型图元编辑"
            },
            {
              "name": "tileset",
              "label": "流式模型编辑"
            },
            {
              "name": "manager",
              "label": "模型管理",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "video",
          "label": "场景视频",
          "examples": [
            {
              "name": "planeVideo",
              "label": "平面视频",
              "suffix": "gif"
            },
            {
              "name": "cameraVideo",
              "label": "视频融合",
              "suffix": "gif"
            },
            {
              "name": "cameraVideoMask",
              "label": "视频融合(羽化)",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "turf",
          "label": "Turf 计算",
          "examples": [
            {
              "name": "pointBuffer",
              "label": "点位缓冲"
            },
            {
              "name": "polylineBuffer",
              "label": "线缓冲"
            },
            {
              "name": "polygonBuffer",
              "label": "面缓冲"
            },
            {
              "name": "polygonScale",
              "label": "比例面"
            },
            {
              "name": "polylineRotate",
              "label": "旋转线"
            },
            {
              "name": "polygonRotate",
              "label": "旋转面"
            },
            {
              "name": "polygonSector",
              "label": "扇形面"
            }
          ]
        },
        {
          "name": "clipping",
          "label": "剖切分析",
          "examples": [
            {
              "name": "globeClipping",
              "label": "地球剖切"
            },
            {
              "name": "terrainClipping",
              "label": "地形剖切"
            }
          ]
        },
        {
          "name": "space",
          "label": "场景分析",
          "examples": [
            {
              "name": "shadows",
              "label": "日照分析",
              "suffix": "gif"
            },
            {
              "name": "sightLine",
              "label": "通视分析(线)"
            },
            {
              "name": "sightCircle",
              "label": "通视分析(圆)"
            },
            {
              "name": "viewshed",
              "label": "可视域分析"
            },
            {
              "name": "contourLine",
              "label": "等高线"
            }
          ]
        }
      ]
    },
    {
      "name": "datav",
      "label": "数据可视化",
      "children": [
        {
          "name": "base",
          "label": "基础",
          "examples": [
            {
              "name": "heat",
              "label": "热区图"
            },
            {
              "name": "heatHeight",
              "label": "热区图(高度)"
            },
            {
              "name": "heatBuilding",
              "label": "热区图(贴建筑)"
            },
            {
              "name": "wind",
              "label": "风向图层",
              "suffix": "gif"
            }
          ]
        },
        {
          "name": "echarts",
          "label": "Echarts",
          "examples": [
            {
              "name": "pm",
              "label": "空气质量",
              "suffix": "gif"
            },
            {
              "name": "migrate",
              "label": "迁徙图",
              "suffix": "gif"
            },
            {
              "name": "airline",
              "label": "航线",
              "suffix": "gif"
            },
            {
              "name": "plane",
              "label": "航线（大庆",
              "suffix": "gif"
            },
            {
              "name": "populationMobility",
              "label": "人口迁徙图",
              "suffix": "gif"
            },
            {
              "name": "logistics",
              "label": "物流图",
              "suffix": "gif"
            }
          ]
        }
      ]
    }
  ]
