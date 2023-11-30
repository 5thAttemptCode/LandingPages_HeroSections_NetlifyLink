import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


const Icon = () => {
    const iconRef = useRef()
  
    useFrame(() => (
      iconRef.current.rotation.y += 0.003
    ))
  
    return(
      <mesh ref={iconRef}>
        <icosahedronGeometry args={[2.6, 2]}/>
        <meshStandardMaterial wireframe color="#263343" />
      </mesh>
    )
  }
  
  const BoxComponent = () => {
    const [boxes, setBoxes] = useState([])
    const boxRef = useRef()
  
    useEffect(() => {
      const tempBoxes = []
  
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * 10 - 5
        const y = Math.random() * 10 - 5
        const z = Math.random() * 10 - 5
  
        tempBoxes.push({ position: [x, y, z], key: i })
      }
  
      setBoxes(tempBoxes);
    }, [])
  
    useFrame(() => {
      if (boxRef.current) {
        boxRef.current.rotation.y -= 0.0003;
      }
    })
    return (
      <>
        <group ref={boxRef}>
            {boxes.map((box) => (
              <mesh position={box.position} key={box.key}>
                <octahedronGeometry args={[0.025, 0]} />
                <meshLambertMaterial roughness={1} color="#263343" />
              </mesh>
            ))}
          </group>
      </>
    )
  }


export default function Scene() {
  return (
    <div className="canvas">
      <Canvas>
          <color attach="background" args={['#263343']} />
          <directionalLight position={[2, 3, 3]} intensity={5} />
          <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial roughness={0.69} color="#263343" />
          </mesh>
          <Icon />
          <BoxComponent />
      </Canvas>
    </div>
  )
}
