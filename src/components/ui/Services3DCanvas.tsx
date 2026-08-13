import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

type ServiceMode = "web" | "webgl" | "ai" | "cloud" | "custom"

interface Services3DCanvasProps {
  initialMode?: ServiceMode
  onModeChange?: (mode: ServiceMode) => void
}

export const Services3DCanvas: React.FC<Services3DCanvasProps> = ({
  initialMode = "web",
  onModeChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeMode, setActiveMode] = useState<ServiceMode>(initialMode)

  const modeRef = useRef<ServiceMode>(initialMode)
  modeRef.current = activeMode

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth || 500
    const height = container.clientHeight || 450

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 16)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // Materials
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x0F172A,
      transparent: true,
      opacity: 0.85,
    })

    const accentMat = new THREE.LineBasicMaterial({
      color: 0xC25938,
      transparent: true,
      opacity: 0.95,
    })

    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0xC25938,
    })

    const meshWireMat = new THREE.MeshBasicMaterial({
      color: 0x0F172A,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })

    // Mode 1: WEB (Cube Matrix / Box Wireframe)
    const webGroup = new THREE.Group()
    const cubeGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5)
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo)
    const webCube = new THREE.LineSegments(cubeEdges, wireMat)
    webGroup.add(webCube)

    const innerBox = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.5, 2.5), meshWireMat)
    webGroup.add(innerBox)
    mainGroup.add(webGroup)

    // Mode 2: WEBGL (Torus Knot)
    const webglGroup = new THREE.Group()
    const torusKnotGeo = new THREE.TorusKnotGeometry(2.2, 0.6, 100, 16)
    const torusKnotEdges = new THREE.EdgesGeometry(torusKnotGeo)
    const webglKnot = new THREE.LineSegments(torusKnotEdges, accentMat)
    webglGroup.add(webglKnot)
    mainGroup.add(webglGroup)

    // Mode 3: AI (Dodecahedron Neural Lattice)
    const aiGroup = new THREE.Group()
    const dodecaGeo = new THREE.DodecahedronGeometry(3.0, 0)
    const dodecaEdges = new THREE.EdgesGeometry(dodecaGeo)
    const aiPoly = new THREE.LineSegments(dodecaEdges, wireMat)
    aiGroup.add(aiPoly)

    // Neural Nodes
    const aiNodes: THREE.Mesh[] = []
    const posAttr = dodecaGeo.attributes.position
    for (let i = 0; i < posAttr.count; i += 3) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), nodeMat)
      node.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
      aiGroup.add(node)
      aiNodes.push(node)
    }
    mainGroup.add(aiGroup)

    // Mode 4: CLOUD (Layered Octahedron & Orbital Ring System)
    const cloudGroup = new THREE.Group()
    const cloudOct = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.OctahedronGeometry(2.8, 0)),
      accentMat
    )
    cloudGroup.add(cloudOct)

    const ringGeo = new THREE.RingGeometry(4.2, 4.28, 64)
    const cloudRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x0F172A, side: THREE.DoubleSide, transparent: true, opacity: 0.4 }))
    cloudRing.rotation.x = Math.PI / 3
    cloudGroup.add(cloudRing)
    mainGroup.add(cloudGroup)

    // Mode 5: CUSTOM SOFTWARE (Icosahedron & Data Satellites)
    const customGroup = new THREE.Group()
    const icoGeo = new THREE.IcosahedronGeometry(3.2, 0)
    const customIco = new THREE.LineSegments(new THREE.EdgesGeometry(icoGeo), wireMat)
    customGroup.add(customIco)
    mainGroup.add(customGroup)

    // Mode visibility sync helper
    const updateVisibility = () => {
      const mode = modeRef.current
      webGroup.visible = mode === "web"
      webglGroup.visible = mode === "webgl"
      aiGroup.visible = mode === "ai"
      cloudGroup.visible = mode === "cloud"
      customGroup.visible = mode === "custom"
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

      if (isDark) {
        wireMat.color.setHex(0xFFFFFF)
        wireMat.opacity = 0.95
        accentMat.color.setHex(0xFF6B35)
        accentMat.opacity = 0.98
        nodeMat.color.setHex(0xFF6B35)
        meshWireMat.color.setHex(0xFFFFFF)
      } else {
        wireMat.color.setHex(0x141412)
        wireMat.opacity = 0.85
        accentMat.color.setHex(0xC25938)
        accentMat.opacity = 0.95
        nodeMat.color.setHex(0xC25938)
        meshWireMat.color.setHex(0x141412)
      }
    }

    updateThemeColors()

    const themeObserver = new MutationObserver(() => updateThemeColors())
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    // Interactive mouse drag & tracking
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
      updateVisibility()

      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      mainGroup.rotation.y = dragRotationY + mouseX * 0.7 + Date.now() * 0.0005
      mainGroup.rotation.x = dragRotationX + mouseY * 0.5

      // Mode-specific rotations
      webCube.rotation.x += 0.004
      webCube.rotation.y += 0.006

      webglKnot.rotation.x += 0.008
      webglKnot.rotation.y += 0.008

      aiPoly.rotation.y += 0.005
      cloudOct.rotation.x += 0.006
      cloudRing.rotation.z += 0.004
      customIco.rotation.z += 0.005

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

  const modes: { id: ServiceMode; label: string }[] = [
    { id: "web", label: "01 Web Systems" },
    { id: "webgl", label: "02 3D / WebGL" },
    { id: "ai", label: "03 AI / Gemini" },
    { id: "cloud", label: "04 Cloud Services" },
    { id: "custom", label: "05 Custom Software" },
  ]

  const handleSelectMode = (mode: ServiceMode) => {
    setActiveMode(mode)
    if (onModeChange) onModeChange(mode)
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex flex-col items-center justify-center border border-border bg-card/20 rounded-xl p-4">
      {/* Top 3D Control Mode Tabs */}
      <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5 z-10 justify-center">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => handleSelectMode(m.id)}
            className={`px-2.5 py-1 rounded text-[10px] font-mono tracking-wider transition-all border ${
              activeMode === m.id
                ? "border-accent bg-accent text-accent-foreground font-bold shadow-xs"
                : "border-border bg-background/80 text-muted-foreground hover:bg-card hover:text-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Canvas Viewport */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Status Overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground pointer-events-none">
        <span className="uppercase tracking-widest bg-background/80 px-2 py-0.5 rounded border border-border">
          Interactive Geometry: {activeMode.toUpperCase()}
        </span>
        <span className="hidden sm:inline bg-background/80 px-2 py-0.5 rounded border border-border">
          Drag cursor to inspect
        </span>
      </div>
    </div>
  )
}
