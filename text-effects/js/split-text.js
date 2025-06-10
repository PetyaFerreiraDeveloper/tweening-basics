import { controlTimeline } from "./controls.js"

gsap.registerPlugin(GSDevTools, SplitText)

const initAnimations = () => {
  const tl = gsap.timeline({ paused: true })
  console.log("Initializing animations...")

  controlTimeline(tl)
}

document.addEventListener("DOMContentLoaded", initAnimations)
