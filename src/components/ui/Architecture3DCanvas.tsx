import { useEffect, useRef } from "react"
import * as THREE from "three"

export const Architecture3DCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 16)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    const wireMat = new THREE.LineBasicMaterial({ color: 0x0F172A, transparent: true, opacity: 0.85 })
    const accentMat = new THREE.LineBasicMaterial({ color: 0xC25938, transparent: true, opacity: 0.95 })
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xC25938 })

    // Build 3 Stacked Architectural Layers (Frontend, API/Logic, Database)
    const layers: THREE.Group[] = []
    const pillars: THREE.Mesh[] = []

    const layerY = [3.5, 0, -3.5]

    layerY.forEach((yPos, i) => {
      const layerGroup = new THREE.Group()
      layerGroup.position.y = yPos

      // Plane grid
      const planeGeo = new THREE.PlaneGeometry(6, 4, 3, 2)
      const planeEdges = new THREE.EdgesGeometry(planeGeo)
      const mesh = new THREE.LineSegments(planeEdges, i === 1 ? accentMat : wireMat)
      mesh.rotation.x = -Math.PI / 3.5
      layerGroup.add(mesh)

      // Add architectural pillar nodes
      const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 2, 8)
      for (let px = -2.5; px <= 2.5; px += 5) {
        for (let pz = -1.5; pz <= 1.5; pz += 3) {
          const pillar = new THREE.Mesh(pillarGeo, new THREE.MeshBasicMaterial({ color: 0x0F172A, wireframe: true }))
          pillar.position.set(px, -1, pz)
          layerGroup.add(pillar)
          pillars.push(pillar)
        }
      }

      // Add small data blocks
      for (let b = 0; b < 3; b++) {
        const boxGeo = new THREE.BoxGeometry(0.8, 0.4, 0.8)
        const box = new THREE.Mesh(boxGeo, nodeMat)
        box.position.set((b - 1) * 2, 0.3, (Math.sin(b) * 0.5))
        layerGroup.add(box)
      }

      mainGroup.add(layerGroup)
      layers.push(layerGroup)
    })

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
        wireMat.color.setHex(0xFFFFFF)
        wireMat.opacity = 0.95
        accentMat.color.setHex(0xFF6B35)
        accentMat.opacity = 0.98
        nodeMat.color.setHex(0xFF6B35)
        pillars.forEach((p) => {
          ;(p.material as THREE.MeshBasicMaterial).color.setHex(0xFFFFFF)
        })
      } else {
        wireMat.color.setHex(0x141412)
        wireMat.opacity = 0.85
        accentMat.color.setHex(0xC25938)
        accentMat.opacity = 0.95
        nodeMat.color.setHex(0xC25938)
        pillars.forEach((p) => {
          ;(p.material as THREE.MeshBasicMaterial).color.setHex(0x141412)
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

    // Vertical Connecting Pipelines (representing APIs)
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 3.5, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, -3.5, 0)
    ])
    const pipeline = new THREE.Line(lineGeo, accentMat)
    mainGroup.add(pipeline)

    // Mouse interactive tilt
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

    let reqId: number
    const animate = () => {
      reqId = requestAnimationFrame(animate)

      // Ensure colors stay synced with theme
      updateThemeColors()

      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      mainGroup.rotation.y = mouseX * 0.9 + Date.now() * 0.0004
      mainGroup.rotation.x = mouseY * 0.5

      layers.forEach((layer, idx) => {
        layer.rotation.z = Math.sin(Date.now() * 0.001 + idx) * 0.05
      })

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
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(reqId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center">
      <div ref={containerRef} className="w-full h-full cursor-grab" />
      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
        Full Stack Architecture • Interactive View
      </div>
    </div>
  )
}
