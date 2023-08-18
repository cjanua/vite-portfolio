import { useRef, useLayoutEffect } from 'react'

import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap';
import { useScroll } from '@react-three/drei';

export const FLOOR_HEIGHT: number = 2.3;
export const NB_FLOORS: number = 3;

export default function Car(){
  const gltf = useLoader(GLTFLoader,'models/car3.glb');
  //Remove floor
  gltf.scene.children[0].children[0].children[27].visible = false;
  
  const ref = useRef(gltf);
  const tl = useRef(gsap.timeline());

  const scroll = useScroll();
  
  
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    //animation
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        
        // y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
        z: 12,
      },
      0
    );
  }, []);
  
  

  return (
    <group ref = {ref}>
      <primitive object={gltf.scene} />
    </group>
  )
}