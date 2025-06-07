import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const tl = gsap.timeline({ paused: true })
  tl.from("h2", { x: 80, opacity: 0 })
    .from("h3", { x: -80, opacity: 0 }, "<")
    .from("p", { y: 30, opacity: 0 })
    .from(".myButton", { y: 50, opacity: 0 })
    .from("#items g", {
      transformOrigin: "50% 50%",
      opacity: 0,
      scale: 0,
      stagger: 0.1,
    })

  controlTimeline(tl)
}

document.addEventListener("DOMContentLoaded", initAnimations)
