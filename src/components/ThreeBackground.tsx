import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TorusGeometry(0.6, 0.3, 16, 100),
      new THREE.ConeGeometry(0.6, 1.2, 8),
      new THREE.TetrahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.2 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.25 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xf59e0b, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.2 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xef4444, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.22 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10b981, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.24 
      }),
    ];

    const meshes: THREE.Mesh[] = [];

    // Create multiple floating objects with different layers for parallax
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      // Create different depth layers for parallax effect
      const layer = Math.floor(i / 8); // 3 layers: 0, 1, 2
      const zPosition = -10 - (layer * 15); // Further back for each layer

      // Random positioning with layer-based depth
      mesh.position.set(
        (Math.random() - 0.5) * (60 + layer * 20),
        (Math.random() - 0.5) * (40 + layer * 10),
        zPosition + (Math.random() - 0.5) * 10
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale based on layer (smaller for further objects)
      const baseScale = Math.random() * 1.5 + 0.5;
      const layerScale = 1 - (layer * 0.2);
      const scale = baseScale * layerScale;
      mesh.scale.set(scale, scale, scale);

      // Store layer info for parallax calculations
      (mesh as any).layer = layer;
      (mesh as any).originalPosition = mesh.position.clone();

      scene.add(mesh);
      meshes.push(mesh);
    }

    meshesRef.current = meshes;

    // Position camera
    camera.position.z = 30;

    // Scroll-based parallax animation
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Move meshes based on scroll progress and their layer
        meshes.forEach((mesh) => {
          const layer = (mesh as any).layer;
          const originalPos = (mesh as any).originalPosition;
          
          // Different parallax speeds for different layers
          const parallaxSpeed = (layer + 1) * 0.5;
          
          // Vertical movement based on scroll
          mesh.position.y = originalPos.y + (progress * 20 * parallaxSpeed);
          
          // Horizontal drift
          mesh.position.x = originalPos.x + (Math.sin(progress * Math.PI * 2) * 5 * parallaxSpeed);
          
          // Rotation based on scroll
          mesh.rotation.z = originalPos.z + (progress * Math.PI * parallaxSpeed);
        });

        // Camera movement based on scroll
        camera.position.y = progress * -10;
        camera.rotation.z = progress * 0.1;
      }
    });

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Continuous rotation and floating motion
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.01 + index * 0.0005;

        // Gentle floating motion (independent of scroll)
        const time = Date.now() * 0.001;
        const floatOffset = Math.sin(time + index) * 0.02;
        mesh.position.z += floatOffset;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Enhanced mouse interaction with parallax consideration
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Subtle camera movement based on mouse
      gsap.to(camera.position, {
        x: mouseX * 3,
        y: mouseY * 2,
        duration: 2,
        ease: 'power2.out'
      });

      // Rotate meshes slightly based on mouse position
      meshes.forEach((mesh, index) => {
        const layer = (mesh as any).layer;
        const influence = (3 - layer) * 0.1; // Closer objects move more
        
        gsap.to(mesh.rotation, {
          x: mesh.rotation.x + (mouseY * influence),
          y: mesh.rotation.y + (mouseX * influence),
          duration: 1.5,
          ease: 'power2.out'
        });
      });

      camera.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === document.body) {
          trigger.kill();
        }
      });
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      meshes.forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(material => material.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }}
    />
  );
};

export default ThreeBackground;