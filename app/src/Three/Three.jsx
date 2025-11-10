import React, { useRef } from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Three() {
  const mountref = useRef(null);

  useEffect(() => {
    const mount = mountref.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camra = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geomtery = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xf54927 });
    const cube = new THREE.Mesh(geomtery, material);
    scene.add(cube);

    camra.position.z = 5;

    function animate() {
      renderer.render(scene, camra);
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
    }
    renderer.setAnimationLoop(animate);

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);


    const loader = new GLTFLoader();

    loader.load(
      "/CHARLE.glb",
      function (gltf) {
        scene.add(gltf.scene);
        console.log(gltf);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []);
  return <div ref={mountref} style={{ width: "100%", height: "100vh" }} />;
}
