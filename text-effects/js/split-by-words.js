import { controlTimeline } from "./controls.js"

gsap.registerPlugin(GSDevTools, SplitText)
const tl = gsap.timeline({ paused: true })
let split

const initAnimations = () => {
  split = new SplitText(".split-by-words", { type: "words" })
  gsap.set(".split-text-demo", { autoAlpha: 1 })

  tl.from(split.words, {
    opacity: 0,
    stagger: 0.15,
    rotation: "random(-80, 80)",
    scale: 2,
    ease: "back",
    duration: 1,
    y: 100,
  })

  controlTimeline(tl)
  GSDevTools.create({ animation: tl, id: "split-by-words" })
}

document.addEventListener("DOMContentLoaded", initAnimations)
