import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
        <spotLight 
            position={[15,15,15]}
            angle={0.20}
            intensity={450}
            penumbra={0.3}
            color={"yellow"}
        />
        <spotLight 
            position={[10,13,2]}
            angle={0.10}
            intensity={400}
            penumbra={0.5}
            color={"yellow"}
        />
        <spotLight 
            position={[-3,5,-2]}
            angle={0.25}
            intensity={50}
            penumbra={1}
            color={"9d4edd"}
        />
        <pointLight
            position={[1,-3,4]}
            angle={0.25}
            intensity={10}
            color={"#7209b7"}
        />
        <pointLight
            position={[1,-3,-4]}
            intensity={5}
            color={"#7209b7"}
        />
        <primitive
            object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
            position={[-5, 5, 0]}
            intensity={0.1}
            rotation={[-Math.PI / 4, Math.PI /4, 0]}
        />
    </>
  )
}

export default HeroLights