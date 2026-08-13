import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface TechNode {
  name: string
  category: string
  color: number
  x: number
  y: number
  z: number
}

export const TechConstellation3DCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth || 500
    const height = container.clientHeight || 400

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 18)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    const techNodes: TechNode[] = [
      { name: "React 18+", category: "Frontend Core", color: 0x61DAFB, x: -4, y: 3, z: 1 },
      { name: "TypeScript", category: "Type Enforcement", color: 0x3178C6, x: -2, y: -2, z: 2 },
      { name: "Three.js", category: "3D WebGL Engine", color: 0x000000, x: 4, y: 2.5, z: -1 },
      { name: "Tailwind CSS", category: "Styling Tokens", color: 0x06B6D4, x: -5, y: -1, z: -2 },
      { name: "Node.js", category: "Server Runtime", color: 0x5FA04E, x: 2, y: -3, z: 1 },
      { name: "PostgreSQL", category: "Relational DB", color: 0x4169E1, x: 5, y: -2, z: 2 },
      { name: "Docker", category: "Containers", color: 0x2496ED, x: 0, y: 4.5, z: -1 },
      { name: "Gemini API", category: "Frontier AI", color: 0xC25938, x: 0, y: 0, z: 0 },
      { name: "FastAPI", category: "Python Services", color: 0x009688, x: 3, y: 1, z: 3 },
    ]

    const nodeMeshes: { mesh: THREE.Mesh; data: TechNode }[] = []

    // Materials
    const wireMat = new THREE.LineBasicMaterial({ color: 0x0F172A, transparent: true, opacity: 0.4 })
    const accentLineMat = new THREE.LineBasicMaterial({ color: 0xC25938, transparent: true, opacity: 0.85 })

    // Build Node Meshes & Wireframe Spheres/Boxes
    techNodes.forEach((node) => {
      const geo = node.name === "Gemini API" ? new THREE.OctahedronGeometry(0.8) : new THREE.BoxGeometry(0.7, 0.7, 0.7)
      const mat = new THREE.MeshBasicMaterial({
        color: node.name === "Gemini API" ? 0xC25938 : 0x0F172A,
        wireframe: true,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(node.x, node.y, node.z)
      mainGroup.add(mesh)

      // Small solid core
      const coreGeo = new THREE.SphereGeometry(0.2, 8, 8)
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xC25938 })
      const coreMesh = new THREE.Mesh(coreGeo, coreMat)
      mesh.add(coreMesh)

      nodeMeshes.push({ mesh, data: node })
    })

    // Create Connecting Constellation Lines
    for (let i = 0; i < techNodes.length; i++) {
      for (let j = i + 1; j < techNodes.length; j++) {
        const n1 = techNodes[i]
        const n2 = techNodes[j]
        const dist = new THREE.Vector3(n1.x, n1.y, n1.z).distanceTo(new THREE.Vector3(n2.x, n2.y, n2.z))
        if (dist < 6.5) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(n1.x, n1.y, n1.z),
            new THREE.Vector3(n2.x, n2.y, n2.z),
          ])
          const line = new THREE.Line(lineGeo, dist < 4 ? accentLineMat : wireMat)
          mainGroup.add(line)
        }
      }
    }

    // Theme Color Synchronizer
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

      wireMat.color.setHex(isDark ? 0xFFFFFF : 0x141412)
      wireMat.opacity = isDark ? 0.35 : 0.25
      accentLineMat.color.setHex(isDark ? 0xFF6B35 : 0xC25938)

      nodeMeshes.forEach(({ mesh, data }) => {
        if (data.name !== "Gemini API") {
          ;(mesh.material as THREE.MeshBasicMaterial).color.setHex(isDark ? 0xFFFFFF : 0x141412)
        }
      })
    }

    updateThemeColors()

    const themeObserver = new MutationObserver(() => updateThemeColors())
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    // Raycasting for interactive hover
    const raycaster = new THREE.Raycaster()
    const mouseVector = new THREE.Vector2()

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
      targetX = (x / rect.width) * 0.8
      targetY = (y / rect.height) * 0.8

      mouseVector.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseVector.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

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
      previousMousePosition = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Animation Loop
    let reqId: number
    const animate = () => {
      reqId = requestAnimationFrame(animate)

      updateThemeColors()

      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      mainGroup.rotation.y = dragRotationY + mouseX * 0.6 + Date.now() * 0.0003
      mainGroup.rotation.x = dragRotationX + mouseY * 0.4

      nodeMeshes.forEach(({ mesh }) => {
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01
      })

      // Check hover intersection
      raycaster.setFromCamera(mouseVector, camera)
      const intersects = raycaster.intersectObjects(nodeMeshes.map((nm) => nm.mesh))

      if (intersects.length > 0) {
        const hit = nodeMeshes.find((nm) => nm.mesh === intersects[0].object)
        if (hit) {
          setHoveredTech(`${hit.data.name} — ${hit.data.category}`)
        }
      } else {
        setHoveredTech(null)
      }

      renderer.render(scene, camera)
    }

    animate()

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
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(reqId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center border border-border bg-card/20 rounded-xl p-4">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground pointer-events-none">
        <span className="uppercase tracking-widest bg-background/80 px-2 py-0.5 rounded border border-border">
          {hoveredTech ? hoveredTech : "Tech Galaxy • Hover 3D Nodes"}
        </span>
        <span className="hidden sm:inline bg-background/80 px-2 py-0.5 rounded border border-border">
          Drag to orbit
        </span>
      </div>
    </div>
  )
}
