import { OrbitControls, MeshTransmissionMaterial } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import * as THREE from "three"
import { RGBELoader } from 'three-stdlib'


export default function Experience(){


  const normalM = useLoader(THREE.TextureLoader, "./Textures/waternormals.jpeg")
  const texture = useLoader(RGBELoader, 'Environments//envmap.hdr')

  return (
    <>
      <OrbitControls />       
      <mesh>
        <boxGeometry />
        <MeshTransmissionMaterial
        // ref={refMaterial}
        // onBeforeCompile={onBeforeCompile}
          attach="material"
          background={texture}
          reflectivity={0.5}
          roughness={0.35}
          transmission={0.8}
          thickness={0.5}
          color={'#ffffff'}
          ior={1.3}
          distortionScale = {1}
          distortion = {0.9}
          temporalDistortion = {0.1}
        />
      </mesh>
    </>
  )}