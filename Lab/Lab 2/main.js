import * as THREE from "./three.module.js";
// Bên dưới hàm init()

function init() {
    var scene = new THREE.Scene();

    // Tạo hộp ban đầu
    var box = getBox(1, 1, 1);
    box.position.y = box.geometry.parameters.height / 2;

    // Tạo mặt phẳng
    var plane = getPlane(4);
    plane.rotation.x = Math.PI / 2;

    // Tạo thêm hai hộp khác
    var box2 = getBox(0.5, 0.5, 0.5);
    box2.position.set(-2, 0.5, 0);

    var box3 = getBox(0.8, 0.8, 0.8);
    box3.position.set(2, 0.4, 0);

    scene.add(box);
    scene.add(plane);
    scene.add(box2); // Thêm hộp thứ hai vào scene
    scene.add(box3); // Thêm hộp thứ ba vào scene

    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("webgl").appendChild(renderer.domElement);
    renderer.render(scene, camera);
}

function getPlane (size)
{
    var geometry = new THREE.PlaneGeometry(size,size)
    var material = new THREE.MeshBasicMaterial(
        {color : 0xff0000,
        side : THREE.DoubleSide}
    )

    var mesh = new THREE.Mesh(
        geometry, 
        material
    )

    return mesh;
}
function getBox (w,h,d)
{
    var geometry = new THREE.BoxGeometry(w,h,d)
    var material = new THREE.MeshBasicMaterial(
        {color : 0x00ff00}
    )

    var mesh = new THREE.Mesh(
        geometry, 
        material
    )

    return mesh;
}

init();

