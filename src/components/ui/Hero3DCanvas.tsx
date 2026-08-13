import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export const Hero3DCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInteracting, setIsInteracting] = useState(false)

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

    // Main Group
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
      opacity: 0.2,
    })

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0F172A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    })

    // 1. Central Architectural Modular Frame (Hyper-cube Structure)
    const cubeGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5)
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo)
    const centralCube = new THREE.LineSegments(cubeEdges, lineMaterial)
    group.add(centralCube)

    // Inner Core Wireframe Octahedron
    const octGeo = new THREE.OctahedronGeometry(2.4, 0)
    const octEdges = new THREE.EdgesGeometry(octGeo)
    const innerOct = new THREE.LineSegments(octEdges, accentLineMaterial)
    group.add(innerOct)

    // Outer Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(3.6, 0)
    const icoEdges = new THREE.EdgesGeometry(icoGeo)
    const outerIco = new THREE.LineSegments(icoEdges, meshMaterial)
    group.add(outerIco)

    // 2. Floating Interface Panels with accent wireframes
    const panels: THREE.LineSegments[] = []
    const panelPositions = [
      { x: -5.2, y: 3.2, z: 2, rx: 0.2, ry: 0.5, w: 3.2, h: 2.2 },
      { x: 5.4, y: -2.8, z: -1, rx: -0.3, ry: -0.4, w: 3.8, h: 2.4 },
      { x: 4.2, y: 4.2, z: -3, rx: 0.4, ry: 0.2, w: 2.8, h: 2.8 },
      { x: -4.8, y: -4.0, z: 1.5, rx: -0.2, ry: 0.6, w: 3.0, h: 2.0 },
      { x: 0, y: 5.8, z: -2, rx: 0.5, ry: 0, w: 4.2, h: 1.4 },
    ]

    panelPositions.forEach((p) => {
      const planeGeo = new THREE.PlaneGeometry(p.w, p.h)
      const planeEdges = new THREE.EdgesGeometry(planeGeo)
      const panel = new THREE.LineSegments(planeEdges, lineMaterial)
      panel.position.set(p.x, p.y, p.z)
      panel.rotation.set(p.rx, p.ry, 0)
      group.add(panel)

      const solidPlane = new THREE.Mesh(planeGeo, meshMaterial)
      panel.add(solidPlane)
      panels.push(panel)
    })

    // 3. Orbiting Data Rings & Gyroscope Elements
    const ringGeo1 = new THREE.RingGeometry(5.0, 5.08, 64)
    const ring1 = new THREE.Mesh(ringGeo1, ringMat)
    ring1.rotation.x = Math.PI / 3.2
    group.add(ring1)

    const ringGeo2 = new THREE.RingGeometry(6.2, 6.26, 64)
    const ring2 = new THREE.Mesh(ringGeo2, accentLineMaterial)
    ring2.rotation.y = Math.PI / 4
    group.add(ring2)

    // 4. Interactive Floating Starfield / Particle Constellation
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleOriginals: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 22
      const y = (Math.random() - 0.5) * 22
      const z = (Math.random() - 0.5) * 18
      particlePositions[i * 3] = x
      particlePositions[i * 3 + 1] = y
      particlePositions[i * 3 + 2] = z
      particleOriginals.push({ x, y, z })
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xC25938,
      size: 0.18,
      transparent: true,
      opacity: 0.75,
    })
    const particleSystem = new THREE.Points(particleGeo, particleMat)
    group.add(particleSystem)

    // 5. Interactive Click Pulse Waves Array
    const shockwaves: { mesh: THREE.Mesh; birth: number }[] = []

    const triggerShockwave = (x: number, y: number) => {
      const shockGeo = new THREE.RingGeometry(0.1, 0.2, 32)
      const shockMat = new THREE.MeshBasicMaterial({
        color: 0xC25938,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      })
      const shockMesh = new THREE.Mesh(shockGeo, shockMat)
      shockMesh.position.set(x, y, 0)
      group.add(shockMesh)
      shockwaves.push({ mesh: shockMesh, birth: Date.now() })
    }

    // 6. Dynamic Theme Color Synchronizer
    const getIsDark = () => {
      const root = document.documentElement
      const body = document.body
      if (root.classList.contains("dark") || body.classList.contains("dark")) return true
      if (root.classList.contains("light") || body.classList.contains("light")) return false
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
        meshMaterial.opacity = 0.2
        ringMat.color.setHex(0xFFFFFF)
        ringMat.opacity = 0.45
        particleMat.color.setHex(0xFF6B35)
      } else {
        lineMaterial.color.setHex(0x141412)
        lineMaterial.opacity = 0.85
        accentLineMaterial.color.setHex(0xC25938)
        accentLineMaterial.opacity = 0.95
        meshMaterial.color.setHex(0x141412)
        meshMaterial.opacity = 0.2
        ringMat.color.setHex(0x141412)
        ringMat.opacity = 0.4
        particleMat.color.setHex(0xC25938)
      }
    }

    updateThemeColors()

    const themeObserver = new MutationObserver(() => updateThemeColors())
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Mouse & Drag Orbit Tracking
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    let dragRotationX = 0
    let dragRotationY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      targetX = (x / rect.width) * 1.2
      targetY = (y / rect.height) * 1.2

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y
        dragRotationY += deltaX * 0.008
        dragRotationX += deltaY * 0.008
        previousMousePosition = { x: e.clientX, y: e.clientY }
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      setIsInteracting(true)
      previousMousePosition = { x: e.clientX, y: e.clientY }

      // Convert click position to 3D world space for shockwave
      const rect = container.getBoundingClientRect()
      const worldX = ((e.clientX - rect.left) / rect.width - 0.5) * 12
      const worldY = -((e.clientY - rect.top) / rect.height - 0.5) * 12
      triggerShockwave(worldX, worldY)
    }

    const handleMouseUp = () => {
      isDragging = false
      setIsInteracting(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Touch support for mobile drag
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true
        setIsInteracting(true)
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x
        const deltaY = e.touches[0].clientY - previousMousePosition.y
        dragRotationY += deltaX * 0.01
        dragRotationX += deltaY * 0.01
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    const handleTouchEnd = () => {
      isDragging = false
      setIsInteracting(false)
    }

    container.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd)

    // Animation Loop
    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      updateThemeColors()

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      // Combine auto-rotation + mouse parallax + drag rotation
      group.rotation.y = dragRotationY + mouseX * 0.8 + Date.now() * 0.0004
      group.rotation.x = dragRotationX - mouseY * 0.8 + Math.sin(Date.now() * 0.0005) * 0.1

      // Central shapes rotating
      centralCube.rotation.x += 0.005
      centralCube.rotation.y += 0.007
      innerOct.rotation.y -= 0.009
      innerOct.rotation.z += 0.006
      outerIco.rotation.x -= 0.002
      outerIco.rotation.y += 0.003

      // Ring rotations
      ring1.rotation.z += 0.003
      ring2.rotation.z -= 0.004

      // Floating panels
      panels.forEach((p, idx) => {
        p.position.y += Math.sin(Date.now() * 0.0018 + idx) * 0.004
      })

      // Particle breathing motion
      const positions = particleGeo.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const orig = particleOriginals[i]
        positions[i * 3 + 1] = orig.y + Math.sin(Date.now() * 0.0015 + orig.x) * 0.4
      }
      particleGeo.attributes.position.needsUpdate = true

      // Animate Shockwaves
      const now = Date.now()
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i]
        const age = (now - sw.birth) / 1000
        if (age > 1.2) {
          group.remove(sw.mesh)
          sw.mesh.geometry.dispose()
          ;(sw.mesh.material as THREE.Material).dispose()
          shockwaves.splice(i, 1)
        } else {
          const scale = 1 + age * 12
          sw.mesh.scale.set(scale, scale, scale)
          ;(sw.mesh.material as THREE.MeshBasicMaterial).opacity = (1.2 - age) * 0.8
        }
      }

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
      container.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] flex items-center justify-center select-none">
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-transform ${
          isInteracting ? "scale-[1.01]" : ""
        }`}
      />
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest pointer-events-none opacity-80 flex items-center gap-2 bg-background/80 px-2.5 py-1 rounded border border-border">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        Drag To Rotate • Click To Pulse 3D Engine
      </div>
    </div>
  )
}
