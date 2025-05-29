import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const positionAnimation = gsap
    .timeline({ paused: true })
    .to(".position-blue", { x: 300, duration: 1 })
    .to(".position-purple", { x: 300, duration: 1 }, "+=1")
    .to(".position-green", { x: 300, duration: 1 }, "<")
    .from("h2", { opacity: 0, xPercent: 100, duration: 1 }, "<0.5")

  controlTimeline(positionAnimation)
}

document.addEventListener("DOMContentLoaded", initAnimations)
