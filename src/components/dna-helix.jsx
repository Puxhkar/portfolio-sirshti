"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const ref = useRef();
  
  // Generate DNA helix points
  const particles = useMemo(() => {
    const temp = [];
    const helixRadius = 2;
    const helixHeight = 10;
    const turns = 4;
    const pointsPerTurn = 50;
    
    for (let i = 0; i < turns * pointsPerTurn; i++) {
      const t = (i / (turns * pointsPerTurn)) * Math.PI * 2 * turns;
      const y = (i / (turns * pointsPerTurn)) * helixHeight - helixHeight / 2;
      
      // First strand
      const x1 = Math.cos(t) * helixRadius;
      const z1 = Math.sin(t) * helixRadius;
      temp.push(x1, y, z1);
      
      // Second strand (opposite)
      const x2 = Math.cos(t + Math.PI) * helixRadius;
      const z2 = Math.sin(t + Math.PI) * helixRadius;
      temp.push(x2, y, z2);
      
      // Connecting rungs (every 10th point)
      if (i % 10 === 0) {
        const steps = 8;
        for (let j = 1; j < steps; j++) {
          const ratio = j / steps;
          const x = x1 + (x2 - x1) * ratio;
          const z = z1 + (z2 - z1) * ratio;
          temp.push(x, y, z);
        }
      }
    }
    
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function DNAHelixCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DNAHelix />
      </Canvas>
    </div>
  );
}
