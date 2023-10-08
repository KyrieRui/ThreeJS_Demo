import * as THREE from "three";

const canvas = document.getElementById("webgl");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  // color: 0xff0000,
  map: new THREE.TextureLoader().load("randaling_t-_rex_animated/textures/material_0_diffuse.png"),
  shininess: 200,
});

const box = new THREE.Mesh(geometry, material);
scene.add(box);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

const tick = () => {
  renderer.render(scene, camera);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  window.requestAnimationFrame(tick);
};

tick();