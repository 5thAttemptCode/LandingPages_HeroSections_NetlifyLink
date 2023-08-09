import { ContactShadows, Environment, Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"


export default function Experience() {
  return (
    <Canvas camera={{position:[2, 3, 12]}}>
        <spotLight position={[10, 4, 10]} penumbra={1} castShadow angle={0.2} />
        <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.65} />
        <Environment preset="sunset" />
        <EffectComposer disableNormalPass>
            <N8AO aoRadius={1} intensity={2} />
            <TiltShift2 blur={0.2} />
        </EffectComposer>
        <Float floatIntensity={4}>
            <Torus />
        </Float>
    </Canvas>
  )
}

const Torus = (props) => (
    <mesh receiveShadow castShadow {...props} >
      <torusGeometry args={[4, 1.2, 64, 64]} />
      <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
    </mesh>
)