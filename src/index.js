import * as BABYLON from "babylonjs";

// Obtém uma referência ao elemento canvas no seu arquivo HTML.
var canvas = document.getElementById('canvas');

// Cria a cena Babylon.js.
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);

// Cria uma câmera.
var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());

// Cria um cubo vermelho.
var box = BABYLON.MeshBuilder.CreateBox('box', { size: 2 }, scene);
var material = new BABYLON.StandardMaterial('material', scene);
material.diffuseColor = new BABYLON.Color3(1, 1, 0); // Vermelho
box.material = material;

// Cria uma animação de rotação para o cubo.
var animation = new BABYLON.Animation('rotation', 'rotation.y', 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
var keyFrames = [
  {
    frame: 0,
    value: 0
  },
  {
    frame: 100,
    value: Math.PI * 2
  }
];
animation.setKeys(keyFrames);
box.animations.push(animation);

// Inicia a animação.
scene.beginAnimation(box, 0, 100, true);

// Inicia o loop de renderização da cena.
engine.runRenderLoop(function () {
  scene.render();
});
