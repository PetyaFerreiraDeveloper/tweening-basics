import { controlTimeline } from "./controls.js"

const initAnimation = () => {
  const tl = gsap.timeline({ paused: true })
  gsap.set(".bouncing-ball", { opacity: 1 })
  tl.to(".ball", {
    keyframes: {
      "0%": { yPercent: 0, scaleX: 1, scaleY: 1 },
      "7%": { yPercent: 5, scaleX: 1.1, scaleY: 0.9, ease: "sine.in" },
      "25%": { yPercent: 100, scaleX: 0.9, scaleY: 1.15, ease: "sine.in" },
      "50%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "none" },
      "60%": { scaleX: 1.6, scaleY: 0.4, ease: "none" },
      "65%": { yPercent: 500, scaleX: 1, scaleY: 1 },
      "100%": { yPercent: 0, scaleX: 1, scaleY: 1, easeEach: "sine.out" },
    },
    duration: 1,
    repeat: -1,
    transformOrigin: "center bottom",
  })

  tl.to(".shadow", {
    scale: 0.7,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    transformOrigin: "center",
  }, '<')

  controlTimeline(tl)
}

document.addEventListener("DOMContentLoaded", initAnimation)
