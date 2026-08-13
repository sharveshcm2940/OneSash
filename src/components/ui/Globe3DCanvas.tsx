import { useEffect, useRef } from "react"
import * as THREE from "three"

export const Globe3DCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth || 400
    const height = container.clientHeight || 400

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 15)

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

    // 1. Globe Latitude & Longitude Wireframe Lines
    const radius = 4.2
    const sphereGeo = new THREE.SphereGeometry(radius, 24, 24)
    const sphereEdges = new THREE.EdgesGeometry(sphereGeo)
    const globeWire = new THREE.LineSegments(sphereEdges, wireMat)
    mainGroup.add(globeWire)

    // 2. Orbital Satellite Ring
    const orbitRingGeo = new THREE.RingGeometry(5.4, 5.48, 64)
    const orbitRing = new THREE.Mesh(
      orbitRingGeo,
      new THREE.MeshBasicMaterial({ color: 0xC25938, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
    )
    orbitRing.rotation.x = Math.PI / 2.8
    mainGroup.add(orbitRing)

    // 3. Location Ping Pins & Data Arcs
    const pingLocations = [
      { lat: 13.0827, lng: 80.2707, label: "Chennai HQ" }, // Chennai
      { lat: 37.7749, lng: -122.4194, label: "USA Client Hub" }, // San Francisco
      { lat: 51.5074, lng: -0.1278, label: "London Partner" }, // London
      { lat: 1.3521, lng: 103.8198, label: "Singapore Edge" }, // Singapore
    ]

    const latLngToVector3 = (lat: number, lng: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      const x = -(r * Math.sin(phi) * Math.cos(theta))
      const z = r * Math.sin(phi) * Math.sin(theta)
      const y = r * Math.cos(phi)
      return new THREE.Vector3(x, y, z)
    }

    const pings: THREE.Mesh[] = []
    pingLocations.forEach((loc) => {
      const pos = latLngToVector3(loc.lat, loc.lng, radius + 0.05)
      const pinGeo = new THREE.SphereGeometry(0.18, 12, 12)
      const pinMesh = new THREE.Mesh(pinGeo, nodeMat)
      pinMesh.position.copy(pos)
      mainGroup.add(pinMesh)
      pings.push(pinMesh)
    })

    // Connecting Arcs between HQ (Chennai) and hubs
    const hqPos = latLngToVector3(pingLocations[0].lat, pingLocations[0].lng, radius)
    for (let i = 1; i < pingLocations.length; i++) {
      const targetPos = latLngToVector3(pingLocations[i].lat, pingLocations[i].lng, radius)
      const mid = new THREE.Vector3().addVectors(hqPos, targetPos).multiplyScalar(0.7)
      const curve = new THREE.QuadraticBezierCurve3(hqPos, mid, targetPos)
      const points = curve.getPoints(30)
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points)
      const arcLine = new THREE.Line(arcGeo, accentMat)
      mainGroup.add(arcLine)
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
        wireMat.opacity = 0.9
        accentMat.color.setHex(0xFF6B35)
        accentMat.opacity = 0.95
        nodeMat.color.setHex(0xFF6B35)
      } else {
        wireMat.color.setHex(0x141412)
        wireMat.opacity = 0.8
        accentMat.color.setHex(0xC25938)
        accentMat.opacity = 0.9
        nodeMat.color.setHex(0xC25938)
      }
    }

    updateThemeColors()

    const themeObserver = new MutationObserver(() => updateThemeColors())
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    // Interactive Mouse Tracking & Dragging
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

      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      mainGroup.rotation.y = dragRotationY + mouseX * 0.6 + Date.now() * 0.0003
      mainGroup.rotation.x = dragRotationX + mouseY * 0.4

      orbitRing.rotation.z += 0.005

      // Pulsing pins
      pings.forEach((p, idx) => {
        const s = 1 + Math.sin(Date.now() * 0.004 + idx) * 0.25
        p.scale.set(s, s, s)
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
    <div className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest pointer-events-none bg-background/80 px-2 py-0.5 rounded border border-border">
        Global Network • 3D Sphere
      </div>
    </div>
  )
}
