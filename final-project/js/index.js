import { controlTimeline } from "./controls.js"
gsap.registerPlugin(GSDevTools)

const initAnimations = () => {
  const tl = gsap.timeline({
    paused: true,
    defaults: { opacity: 0, ease: "back" },
  })
  tl.from(".demo", { ease: "linear" })
    .from("h2", { x: 80, duration: 1 })
    .from("h3", { x: -80, duration: 1 }, "<")
    .from("p", { y: 30 }, "-=0.2")
    .from(".myButton", { y: 50 }, "-=0.4")
    .from(
      "#items g",
      {
        transformOrigin: "50% 50%",
        scale: 0,
        stagger: 0.1,
      },
      "-=0.2"
    )

  controlTimeline(tl)
  GSDevTools.create({ animation: tl })
}

document.addEventListener("DOMContentLoaded", initAnimations)
