(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{684:function(n,t,e){"use strict";e.r(t),t.default="const {Scene, Sprite, Path} = spritejs;\nconst container = document.getElementById('stage');\nconst scene = new Scene({\n  container,\n  width: 1200,\n  height: 600,\n});\nconst bglayer = scene.layer('bglayer');\nconst fglayer = scene.layer('fglayer');\n\n(async function () {\n  function randomTriangle() {\n    const triangle = new Path();\n    const pos = [Math.random() * 1540, Math.random() * 600];\n    const d = 'M0,0L0,10L8.66, 5z';\n    triangle.attr({\n      d,\n      scale: 5,\n      pos,\n      fillColor: '#37c',\n      rotate: Math.random() * 360,\n    });\n    bglayer.append(triangle);\n  }\n\n  for(let i = 0; i < 100; i++) {\n    randomTriangle();\n  }\n\n  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';\n  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';\n\n  await scene.preload([birdsRes, birdsJsonUrl]);\n\n  const bird = new Sprite('bird1.png');\n\n  bird.attr({\n    anchor: [0.5, 0.5],\n    pos: [50, 200],\n    scale: 0.6,\n    offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100',\n  });\n  fglayer.append(bird);\n\n  bird.animate([\n    {texture: 'bird1.png'},\n    {texture: 'bird2.png'},\n    {texture: 'bird3.png'},\n    {texture: 'bird1.png'},\n  ], {\n    duration: 300,\n    iterations: Infinity,\n    direction: 'alternate',\n    easing: 'step-end',\n  });\n\n  bird.animate([\n    {offsetDistance: 0},\n    {offsetDistance: 1},\n  ], {\n    duration: 6000,\n    iterations: Infinity,\n  });\n\n  const snapshotBtn = document.getElementById('take-snapshot'),\n    snapshotList = document.getElementById('snapshot-list');\n\n  snapshotBtn.addEventListener('click', async (evt) => {\n    const canvas = await scene.snapshot();\n    const snapshot = new Image();\n    snapshot.src = canvas.toDataURL();\n    const listItem = document.createElement('li');\n    listItem.appendChild(snapshot);\n    snapshotList.appendChild(listItem);\n  });\n}());"}}]);