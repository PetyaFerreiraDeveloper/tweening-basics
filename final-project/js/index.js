import { controlTimeline } from "./controls.js"

const initAnimations = () => {
  const tl = gsap.timeline({ paused: true, defaults: { opacity: 0 } })
  tl.from("h2", { x: 80 })
    .from("h3", { x: -80 }, "<")
    .from("p", { y: 30 })
    .from(".myButton", { y: 50 })
    .from("#items g", {
      transformOrigin: "50% 50%",
      scale: 0,
      stagger: 0.1,
    })

  controlTimeline(tl)
}

document.addEventListener("DOMContentLoaded", initAnimations)
