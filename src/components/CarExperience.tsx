import { OrbitControls, PerspectiveCamera, ScrollControls } from "@react-three/drei"
import Car from "./Car"
// import Ground from "./Ground"
import {useState} from 'react'
import { useFrame} from '@react-three/fiber'
import {Overlay} from "./Overlay";

export default function CarExperience(){
  const [pos, setPos] = useState(16);

  useFrame(({clock}) => {

    let c = clock.getElapsedTime()
    if (pos >= 3){
      c = Math.sqrt(c) / 16;
      setPos(pos - c)
    }
  })
  return (
    <>
      <ambientLight intensity={0} />
      <pointLight position={[10, 20, 20]} intensity={0.8}/>
      <pointLight position={[-10, 20, 30]} intensity={0.8}/>
      {/* <gridHelper /> */}
      <OrbitControls  target = {[-0, 1, 3]} enablePan = {false} enableRotate = {false}  maxPolarAngle = {1.45} enableZoom = {false}/>
      <PerspectiveCamera fov = {90} makeDefault position = {[2, 2, pos+1]} />
      <pointLight position={[-5, 0, 0]} intensity={0.4}/>
      <pointLight position={[3, 2, 3]} intensity={0.4}/>
      <ScrollControls pages={1} enabled = {true} style = {{opacity: "100"}}>
        <Overlay />        <Car />
        {/* <Ground /> */}
      </ScrollControls>
    </>
  )
}