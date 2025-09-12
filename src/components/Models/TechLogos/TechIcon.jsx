import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({color:'white'}); // Change to desired color
        }
      })
    }
  }, [scene])

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1.5} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

      <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} scale={model.scale} position={model.position} rotation={model.rotation} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon