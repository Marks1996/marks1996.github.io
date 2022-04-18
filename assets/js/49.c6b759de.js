(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{560:function(t,s,e){"use strict";e.r(s);var a=e(21),r=function(t){t.options.__data__block__={roughviz_donut_382ee1c9:'{\n  "data": {\n    "labels": ["North", "South", "East", "West"],\n    "values": [10, 5, 8, 3]\n  },\n  "title": "Regions",\n  "colors": ["red", "orange", "blue", "skyblue"],\n  "roughness": 4\n}',roughviz_bar_382ee1e8:'{\n  "data": "/csv/flavors.csv",\n  "labels": "flavor",\n  "values": "price"\n}'}},n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-roughviz",target:"_blank"}},[e("img",{staticStyle:{display:"inline",margin:"0"},attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-roughviz.svg?style=flat-square&logo=npm",alt:"npm"}})]),t._v(" "),e("a",{attrs:{href:"https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/roughviz",target:"_blank"}},[e("img",{staticStyle:{display:"inline",margin:"0"},attrs:{src:"https://img.shields.io/badge/GitHub-vuepress--plugin--roughviz-26A2FF?style=flat-square&logo=github",alt:"github"}})]),t._v(" "),e("a",{attrs:{href:"https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE",target:"_blank"}},[e("img",{staticStyle:{display:"inline",margin:"0"},attrs:{src:"https://img.shields.io/badge/License-MIT-green?style=flat-square",alt:"license"}})])]),t._v(" "),e("p",[e("code",[t._v("vuepress-plugin-roughviz")]),t._v(" 插件，用于在 VuePress 的 Markdown 中使用手绘样式图表库 "),e("a",{attrs:{href:"https://github.com/jwilber/roughViz",target:"_blank",rel:"noopener noreferrer"}},[t._v("roughViz.js")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-roughviz\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-roughviz\n")])])]),e("p",[t._v("然后在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中引入这个插件：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-roughviz'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[t._v("roughViz.js 支持以下五种图表类型：")]),t._v(" "),e("ul",[e("li",[t._v("Bar ("),e("code",[t._v("bar")]),t._v(")")]),t._v(" "),e("li",[t._v("Horizontal Bar ("),e("code",[t._v("barh")]),t._v(")")]),t._v(" "),e("li",[t._v("Donut ("),e("code",[t._v("donut")]),t._v(")")]),t._v(" "),e("li",[t._v("Line ("),e("code",[t._v("line")]),t._v(")")]),t._v(" "),e("li",[t._v("Pie ("),e("code",[t._v("pie")]),t._v(")")]),t._v(" "),e("li",[t._v("Scatter ("),e("code",[t._v("scater")]),t._v(")")]),t._v(" "),e("li",[t._v("Stacked Bar ("),e("code",[t._v("stackedbar")]),t._v(")")])]),t._v(" "),e("p",[t._v("因此代码块的 token info 需要为 "),e("code",[t._v("roughviz-{ 你想创建的图表类型 }")]),t._v("。比如想要创建一个 Donut 图表：")]),t._v(" "),e("Roughviz",{attrs:{id:"roughviz_donut_382ee1c9",chart:"donut",code:t.$dataBlock.roughviz_donut_382ee1c9}}),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('```roughviz-donut\n{\n  "data": {\n    "labels": ["North", "South", "East", "West"],\n    "values": [10, 5, 8, 3]\n  },\n  "title": "Regions",\n  "colors": ["red", "orange", "blue", "skyblue"],\n  "roughness": 4\n}\n```\n')])])])]),t._v(" "),e("p",[t._v("如果希望加载本地 "),e("code",[t._v("csv")]),t._v(" 文件中的数据，一种可行的方法是把 "),e("code",[t._v("csv")]),t._v(" 文件放在 "),e("code",[t._v(".vuepress/public/")]),t._v(" 文件夹下（假设路径为 "),e("code",[t._v(".vuepress/public/csv/flavors.csv")]),t._v("），然后：")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Code")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('```roughviz-bar\n{\n  "data": "/csv/flavors.csv",\n  "labels": "flavor",\n  "values": "price"\n}\n```\n')])])])]),t._v(" "),e("Roughviz",{attrs:{id:"roughviz_bar_382ee1e8",chart:"bar",code:t.$dataBlock.roughviz_bar_382ee1e8}}),e("p",[t._v("更详细的用法可以参考 "),e("a",{attrs:{href:"https://github.com/jwilber/roughViz",target:"_blank",rel:"noopener noreferrer"}},[t._v("roughViz.js 文档")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"开源协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源协议"}},[t._v("#")]),t._v(" 开源协议")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT")])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(n);s.default=n.exports}}]);