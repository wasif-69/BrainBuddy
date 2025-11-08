// src/components/BrainBuddyScene.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t) * 1.5;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#FFEB3B" emissive="#FFC107" emissiveIntensity={0.5} />
    </mesh>
  );
};

const BrainBuddyScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingSphere />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default BrainBuddyScene;
