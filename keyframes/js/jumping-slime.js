import { controlTimeline } from "./controls.js"
gsap.registerPlugin(GSDevTools)

const initAnimation = () => {
  const tl = gsap.timeline({ paused: true })
  tl.to(".slime", {
    keyframes: {
      "25%": { y: 0 },
      "50%": { y: -100, ease: 'sine' },
      "75%": { y: 0, ease: 'sine.in' },
      "100%": { x: 320, ease: "none" },
    },
    duration: 2,
  })

  controlTimeline(tl)
  GSDevTools.create({ animation: tl, id: "jumping-slime" })
}

document.addEventListener("DOMContentLoaded", initAnimation)
