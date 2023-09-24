import * as BABYLON from "babylonjs";
import "babylonjs-loaders"


const canvas = document.getElementById("canvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = async () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, false);

    camera.inputs.addMouseWheel()
    camera.lowerRadiusLimit = 15; // Distância mínima
    camera.upperRadiusLimit = 50; // Distância máxima

    const dome = await new BABYLON.PhotoDome(
        "testdome",
        "../public/texture/sky/cerulux1.png", {resolution: 32, size: 1000},
        scene
    )

    await BABYLON.SceneLoader.ImportMesh("", "./public/models/", "montmap.glb", scene, function (meshes) {
        camera.target = meshes[0]
        console.log("mesh: ", meshes)
      });

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    

    return scene;
}




const scenex = await createScene(); //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scenex.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});