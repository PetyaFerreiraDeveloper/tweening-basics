import { controlTimeline } from "./controls.js"

gsap.registerPlugin(GSDevTools)

const initAnimation = () => {
  const tl = gsap.timeline({ paused: true })

  tl.to(".box", {
    keyframes: [{ x: 100 }, { y: 100 }, { x: 0 }, { y: 0 }],
    rotate: 360,
    transformOrigin: "center center",
  })

  // gsap.to(".box", {
  //   keyframes: {
  //     x: [0, 100, 100, 0, 0],
  //     y: [0, 0, 100, 100, 0],
  //     ease: "power1.inOut",
  //   },
  //   duration: 2,
  // })

  controlTimeline(tl)
}

document.addEventListener("DOMContentLoaded", initAnimation)
