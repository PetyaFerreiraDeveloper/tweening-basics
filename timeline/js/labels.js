import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const labelsAnimation = gsap
    .timeline({ paused: true })
    .from(".labels-title", { opacity: 0, scale: 0, ease: "back" })
    .from(
      ".labels-freds img",
      { y: 160, stagger: 0.1, duration: 0.8, ease: "back" },
      "+=1"
    )
    .add("test")
    .from(".labels-time", { xPercent: 100, duration: 0.5, ease: "bounce" })

  controlTimeline(labelsAnimation, "test")
}
document.addEventListener("DOMContentLoaded", initAnimations)
