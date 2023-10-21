import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import useMousePosition from './useMousePosition';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

type Prop ={
  count: number,
}



const CustomGeometryParticles = (props: Prop) => {  
  const { count } = props;
  const radius = 2;

  // This reference gives us direct access to our points
  const points = useRef(null);

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * radius*1.8;
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      
      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0+5
    },
    uRadius: {
      value: radius*1.1
    }
  }), [])

  const clientX = useMousePosition().clientX
  const clientY = useMousePosition().clientY

  const [mess, setMess] = useState(0)
  const [si, setSi] = useState(0)

  useFrame(() => {
    setMess(-(clientX - window.innerWidth/2)/(window.innerWidth/2))
    setSi(-(clientY - window.innerHeight/2)/(window.innerHeight/2))
    if ( !(points.current.material.uniforms.uRadius.value < 0.45 && si < 0) && !(points.current.material.uniforms.uRadius.value > 4 && si > 0)){
      points.current.material.uniforms.uRadius.value += 0.0018*si
    }
    
    points.current.material.uniforms.uTime.value += 0.15*mess //Math.cos(deltaTime/5)
    
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }} style={{ background: "black" }}>
      <ambientLight intensity={0} />
      <CustomGeometryParticles count={1200000} />
    </Canvas>
  );
};

export default Scene;


