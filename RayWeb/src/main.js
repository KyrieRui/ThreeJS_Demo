import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Create sphere
// geometry is like clay, it's the shape
const geometry = new THREE.SphereGeometry(3, 64, 64); // this premiters are radius, widthSegments, heightSegments

const material = new THREE.MeshBasicMaterial({
  color: "red",
}); // this is the color

const mesh = new THREE.Mesh(geometry, material); // combine the geometry and the material
scene.add(mesh); // add the mesh to the scene

// Light
const light = new THREE.PointLight(0xffffff, 1, 100); // this premiters are color, intensity
light.position.set(0, 10, 10); // this is the position of the light
scene.add(light); // add the light to the scene

// Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600); // this premiters are fov, aspect, near, far
camera.position.z = 20; // this is the position of the camera
scene.add(camera); // add the camera to the scene

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600); // this premiters are width, height
renderer.render(scene, camera); // this premiters are scene, camera
