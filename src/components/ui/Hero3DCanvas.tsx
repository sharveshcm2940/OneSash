import { useEffect, useRef } from "react"
import * as THREE from "three"

export const Hero3DCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 18)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Group for objects
    const group = new THREE.Group()
    scene.add(group)

    // Materials - tactile, technical wireframe & architectural shapes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0F172A,
      transparent: true,
      opacity: 0.85,
    })

    const accentLineMaterial = new THREE.LineBasicMaterial({
      color: 0xC25938,
      transparent: true,
      opacity: 0.95,
    })

    const meshMaterial = new THREE.MeshBasicMaterial({
      color: 0x0F172A,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0F172A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    })

    // 1. Central Architectural Modular Frame (Software Architecture)
    const cubeGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5)
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo)
    const centralCube = new THREE.LineSegments(cubeEdges, lineMaterial)
    group.add(centralCube)

    // Inner core Wireframe Octahedron
    const octGeo = new THREE.OctahedronGeometry(2.2, 0)
    const octEdges = new THREE.EdgesGeometry(octGeo)
    const innerOct = new THREE.LineSegments(octEdges, accentLineMaterial)
    group.add(innerOct)

    // 2. Floating Interface Fragments / Panels
    const panels: THREE.LineSegments[] = []
    const panelPositions = [
      { x: -5, y: 3, z: 2, rx: 0.2, ry: 0.5, w: 3, h: 2 },
      { x: 5.2, y: -2.5, z: -1, rx: -0.3, ry: -0.4, w: 3.5, h: 2.2 },
      { x: 3.8, y: 4, z: -3, rx: 0.4, ry: 0.2, w: 2.5, h: 2.5 },
      { x: -4.5, y: -3.8, z: 1.5, rx: -0.2, ry: 0.6, w: 2.8, h: 1.8 },
      { x: 0, y: 5.5, z: -2, rx: 0.5, ry: 0, w: 4, h: 1.2 },
    ]

    panelPositions.forEach((p) => {
      const planeGeo = new THREE.PlaneGeometry(p.w, p.h)
      const planeEdges = new THREE.EdgesGeometry(planeGeo)
      const panel = new THREE.LineSegments(planeEdges, lineMaterial)
      panel.position.set(p.x, p.y, p.z)
      panel.rotation.set(p.rx, p.ry, 0)
      group.add(panel)

      // Add a subtle solid wire mesh backing
      const solidPlane = new THREE.Mesh(planeGeo, meshMaterial)
      panel.add(solidPlane)

      panels.push(panel)
    })

    // 3. Floating Nodes & Wireframe Rings
    const ringGeo = new THREE.RingGeometry(3.2, 3.25, 32)
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3
    group.add(ring)

    // Small data nodes (cubes)
    const nodes: THREE.Mesh[] = []
    for (let i = 0; i < 12; i++) {
      const nodeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35)
      const nodeMat = new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0xC25938 : 0x0F172A })
      const node = new THREE.Mesh(nodeGeo, nodeMat)
      const angle = (i / 12) * Math.PI * 2
      const radius = 6.5 + Math.sin(i) * 1.5
      node.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 4, Math.sin(angle) * radius)
      group.add(node)
      nodes.push(node)
    }

    // Dynamic Theme Color Synchronizer
    const getIsDark = () => {
      const root = document.documentElement
      const body = document.body
      if (root.classList.contains("dark") || body.classList.contains("dark")) {
        return true
      }
      if (root.classList.contains("light") || body.classList.contains("light")) {
        return false
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    let currentIsDark: boolean | null = null

    const updateThemeColors = () => {
      const isDark = getIsDark()
      if (currentIsDark === isDark) return
      currentIsDark = isDark

      if (isDark) {
        lineMaterial.color.setHex(0xFFFFFF)
        lineMaterial.opacity = 0.95
        accentLineMaterial.color.setHex(0xFF6B35)
        accentLineMaterial.opacity = 0.98
        meshMaterial.color.setHex(0xFFFFFF)
        meshMaterial.opacity = 0.25
        ringMat.color.setHex(0xFFFFFF)
        ringMat.opacity = 0.45
        nodes.forEach((node, i) => {
          ;(node.material as THREE.MeshBasicMaterial).color.setHex(i % 3 === 0 ? 0xFF6B35 : 0xFFFFFF)
        })
      } else {
        lineMaterial.color.setHex(0x141412)
        lineMaterial.opacity = 0.85
        accentLineMaterial.color.setHex(0xC25938)
        accentLineMaterial.opacity = 0.95
        meshMaterial.color.setHex(0x141412)
        meshMaterial.opacity = 0.25
        ringMat.color.setHex(0x141412)
        ringMat.opacity = 0.4
        nodes.forEach((node, i) => {
          ;(node.material as THREE.MeshBasicMaterial).color.setHex(i % 3 === 0 ? 0xC25938 : 0x141412)
        })
      }
    }

    updateThemeColors()

    // Observe theme class toggles on HTML element
    const themeObserver = new MutationObserver(() => {
      updateThemeColors()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    })

    // Mouse Tracking for Parallax Effect
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      targetX = (x / rect.width) * 0.8
      targetY = (y / rect.height) * 0.8
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation Loop
    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Ensure colors stay synced with theme
      updateThemeColors()

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      // Group rotation
      group.rotation.y = mouseX * 0.8 + Date.now() * 0.0003
      group.rotation.x = -mouseY * 0.8 + Math.sin(Date.now() * 0.0005) * 0.1

      // Central shapes rotating counter
      centralCube.rotation.x += 0.004
      centralCube.rotation.y += 0.006
      innerOct.rotation.y -= 0.008
      innerOct.rotation.z += 0.005

      // Floating panels floating up and down
      panels.forEach((p, idx) => {
        p.position.y += Math.sin(Date.now() * 0.0015 + idx) * 0.003
      })

      // Orbiting nodes
      nodes.forEach((n) => {
        n.rotation.x += 0.01
        n.rotation.y += 0.02
      })

      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      themeObserver.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] flex items-center justify-center">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest pointer-events-none opacity-60">
        Interactive 3D Engine • Move Cursor
      </div>
    </div>
  )
}
