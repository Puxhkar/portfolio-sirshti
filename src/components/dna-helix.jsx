"use client";

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix({ reducedMotion = false }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(true);
  
  // Generate DNA helix points with optimized geometry
  const particles = useMemo(() => {
    const temp = [];
    const helixRadius = 2;
    const helixHeight = 10;
    const turns = reducedMotion ? 2 : 4; // Reduce complexity for reduced motion
    const pointsPerTurn = reducedMotion ? 25 : 50;
    
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
      
      // Connecting rungs (every 10th point, reduced for performance)
      if (i % (reducedMotion ? 15 : 10) === 0) {
        const steps = reducedMotion ? 4 : 8;
        for (let j = 1; j < steps; j++) {
          const ratio = j / steps;
          const x = x1 + (x2 - x1) * ratio;
          const z = z1 + (z2 - z1) * ratio;
          temp.push(x, y, z);
        }
      }
    }
    
    return new Float32Array(temp);
  }, [reducedMotion]);

  // Handle visibility based on page visibility API for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useFrame((state) => {
    if (ref.current && isVisible && !reducedMotion) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15; // Slightly slower for better performance
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={reducedMotion ? 0.03 : 0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

export default function DNAHelixCanvas() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          alpha: true, 
          antialias: false, // Disable for better performance
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        dpr={[1, 2]} // Limit pixel ratio for performance
        performance={{ min: 0.5 }} // Auto-adjust quality based on performance
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <DNAHelix reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
