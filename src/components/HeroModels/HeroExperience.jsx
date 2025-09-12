import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";


const HeroExperience = () => {
    const isTablet  = useMediaQuery({ query: '(max-width: 1024px)'});  
    const isMobile  = useMediaQuery({ query: '(max-width: 968px)'});

  return (
    <Canvas camera = {{ position: [0, 0, 15], fov: 45}}>

        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={-2.5}
        />
        <HeroLights />

        <Particles count={50} />

          <group 
          scale={isMobile ? 0.7 : isTablet ? 0.9 : 1}
          position={isMobile ? [0, -4, 0] : isTablet ? [0, -2, 0] : [0, -3, 0]}
          rotation={[0, Math.PI/4 , 0]}
        >
          <Room />
        </group>
    </Canvas>
  )
}

export default HeroExperience