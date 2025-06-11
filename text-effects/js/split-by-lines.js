import { controlTimeline } from "./controls.js"

gsap.registerPlugin(GSDevTools, SplitText)
const tl = gsap.timeline({ paused: true })
let split

const initAnimations = () => {
  split = new SplitText(".split-by-lines", { type: "lines" })
  gsap.set(".split-text-demo", { autoAlpha: 1 })

  tl.from(split.lines, {
    opacity: 0,
    stagger: 0.5,
    rotationX: -90,
    rotationY: -45,
    transformOrigin: "50% 50% -150",
  })

  controlTimeline(tl)
  GSDevTools.create({ animation: tl, id: "split-by-lines" })
}

document.addEventListener("DOMContentLoaded", initAnimations)
