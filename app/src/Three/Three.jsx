// Learning3DSection.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function ColorfulCube() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  const materials = [
    <meshStandardMaterial attach="material-0" color="#ff6f61" />, // coral
    <meshStandardMaterial attach="material-1" color="#6a1b9a" />, // purple
    <meshStandardMaterial attach="material-2" color="#29b6f6" />, // light blue
    <meshStandardMaterial attach="material-3" color="#ffee58" />, // yellow
    <meshStandardMaterial attach="material-4" color="#43a047" />, // green
    <meshStandardMaterial attach="material-5" color="#f57c00" />, // orange
  ];

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      {materials}
    </mesh>
  );
}

function OrbitingText({ text, radius, speed, index, mouse }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + index;
    const mx = (mouse.current[0] / window.innerWidth - 0.5) * 2;
    const my = -(mouse.current[1] / window.innerHeight - 0.5) * 2;

    ref.current.position.x = Math.cos(t + mx) * radius;
    ref.current.position.y = Math.sin(t * 0.8 + my) * 1 + 0.5;
    ref.current.position.z = Math.sin(t + mx) * radius;
    ref.current.rotation.y += 0.01;
  });

  return (
    <Text ref={ref} fontSize={0.3} color="#ff4081" anchorX="center" anchorY="middle">
      {text}
    </Text>
  );
}

export default function Learning3DSection() {
  const lettersAndNumbers = ["A", "B", "C", "1", "2", "3", "X", "Y", "Z"];
  const mouse = useRef([0, 0]);

  const handleMouseMove = (e) => {
    mouse.current = [e.clientX, e.clientY];
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100%",
        height: "550px",
        border: "4px solid #43a047", // green border
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        background: "linear-gradient(120deg, #e0f7fa, #f1f8e9)", // light blue to light green gradient
      }}
    >
      <Canvas shadows camera={{ position: [5, 4, 7], fov: 55 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[12, 12]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        <ColorfulCube />

        {lettersAndNumbers.map((item, index) => (
          <OrbitingText
            key={index}
            text={item}
            radius={2 + Math.random() * 1.5}
            speed={0.5 + Math.random()}
            index={index}
            mouse={mouse}
          />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  );
}
