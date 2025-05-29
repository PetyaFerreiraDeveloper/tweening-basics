import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const homeAnimation = gsap
    .timeline({ paused: true })
    .from(".home-title", { opacity: 0, scale: 0, ease: "back" })
    .from(
      ".home-freds img",
      {
        y: 160,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
      },
      "+=1"
    )
    .from(".home-time", { xPercent: 100, duration: 0.5 }, "<")

  controlTimeline(homeAnimation)
}

document.addEventListener("DOMContentLoaded", initAnimations)
