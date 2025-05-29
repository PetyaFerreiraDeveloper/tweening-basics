import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const timeline = gsap
    .timeline()
    .from(".home", { opacity: 0, duration: 1 })
    .from(".home-title", { opacity: 0, scale: 0, ease: "back" })
    .from(".home-freds img", {
      y: 160,
      stagger: 0.1,
      duration: 0.8,
      ease: "back",
    })
    .from(".home-time", { xPercent: 100, duration: 0.2 })

  controlTimeline(timeline)
}

document.addEventListener("DOMContentLoaded", initAnimations)
