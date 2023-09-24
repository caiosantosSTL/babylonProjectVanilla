import * as BABYLON from "babylonjs";

const canvas = document.getElementById("canvas"); // Get the canvas element

const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox("box", {width: 2, height: 1.5, depth: 3});
    box.position.y = 0.5;
    box.position.x = 2
    box.rotation.y = BABYLON.Tools.ToRadians(90);

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
    roof.scaling.x = 1;
    roof.scaling.z = 4;
    roof.scaling.y = 2;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.50;
    roof.position.x = 2

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});

    // material

    const material = new BABYLON.StandardMaterial("name", scene)

    const groundMat = new BABYLON.StandardMaterial("groundMat")
    groundMat.diffuseColor = new BABYLON.Color3.Green()
    //groundMat = new BABYLON.Texture("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5273fa00-3136-4e59-831c-f230e027103a/d8jpn9c-24905b52-b928-4851-9ed1-36a55fbe03c5.jpg/v1/fill/w_894,h_894,q_70,strp/seamless_tileable_grass_texture_by_mushin3d_d8jpn9c-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0OCIsInBhdGgiOiJcL2ZcLzUyNzNmYTAwLTMxMzYtNGU1OS04MzFjLWYyMzBlMDI3MTAzYVwvZDhqcG45Yy0yNDkwNWI1Mi1iOTI4LTQ4NTEtOWVkMS0zNmE1NWZiZTAzYzUuanBnIiwid2lkdGgiOiI8PTIwNDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RuaG9ouuv2StsFiguVimIEdHPRsktWTNNfZQ497YGcs", scene)
    ground.material = groundMat

    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg", scene);
    
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    roof.material = roofMat;

    boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");
    box.material = boxMat;

    return scene;
}


const scene = createScene(); //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});