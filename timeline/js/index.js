import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const timeline = gsap.timeline().from(".home", { opacity: 0, duration: 3 })

  controlTimeline(timeline)
}

document.addEventListener("DOMContentLoaded", initAnimations)
