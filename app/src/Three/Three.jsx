
import React, { useRef } from 'react'
import { useEffect } from 'react'
import * as THREE from "three"

export default function Three() {

  const mountref=useRef(null)

  useEffect(()=>{
    const mount=mountref.current;
    if (!mount){
      return
    }

    const scene= new THREE.Scene();
    const camra = new THREE.PerspectiveCamera(75,mount.clientWidth/mount.clientHeight,0.1,1000);

    const renderer=new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth,mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geomtery=new THREE.BoxGeometry(1,1,1);
    const material=new THREE.MeshBasicMaterial({color:0xF54927})
    const cube=new THREE.Mesh(geomtery,material)
    scene.add(cube)

    camra.position.z=5

    function animate(){
      renderer.render(scene,camra);
    }
    renderer.setAnimationLoop(animate);

    return () => {
      renderer.setAnimationLoop(null); // stop loop
      renderer.dispose(); // free memory
      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  },[])
  return (
    <div ref={mountref} style={{ width: '100%', height: '100vh' }} />
  )
}
