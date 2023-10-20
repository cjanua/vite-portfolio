import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
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
      value: 0.0
    },
    uRadius: {
      value: radius
    }
  }), [])

  const clientX = useMousePosition().clientX
  const clientY = useMousePosition().clientY


  useFrame((state) => {
    const { clock } = state;
    const mess = (clientX - window.innerWidth/2)/(window.innerWidth/2)
    const str = (clientY - window.innerHeight/2)/(window.innerHeight/2)
    points.current.material.uniforms.uRadius.value -= str/1000;
    points.current.material.uniforms.uTime.value -= mess/10;
    
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
    <Canvas camera={{ position: [1.3, 1.3, 1.3] }}>
      <ambientLight intensity={0} />
      <CustomGeometryParticles count={900000} />
    </Canvas>
  );
};

export default Scene;


