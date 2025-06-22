import { controlTimeline } from "./controls.js"
gsap.registerPlugin(GSDevTools)

const initAnimation = () => {
  const tl = gsap.timeline({ paused: true })
  tl.to(".slimes", {
    keyframes: {
      "25%": { y: 0 },
      "50%": { y: -100, rotate: 0, ease: "sine" },
      "55%": { rotate: 180, duration: 0.2 },
      "60%": { rotate: 360, duration: 0.2 },
      "75%": { y: 0, ease: "sine.in" },
      "100%": { x: 320, ease: "none" },
    },
    duration: 2,
    stagger: 0.6
  })

  controlTimeline(tl)
  GSDevTools.create({ animation: tl, id: "6-jumping-slimes" })
}

document.addEventListener("DOMContentLoaded", initAnimation)
