import { controlTimeline } from "./controls.js"

gsap.registerPlugin(TextPlugin)

const initAnimations = () => {
  const tl = gsap.timeline({ paused: true })
  tl.from(".second-text", {
    text: "This text will disappear",
    duration: 2,
    ease: "power1.in",
  })
    .to(".first-text", {
      text: "Typewriter effect wtih GSAP TextPlugin",
      duration: 2,
      ease: "power1.in",
    })

    .to(".third-text", {
      text: "Look at this yoyo effect",
      repeat: 1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    })

  controlTimeline(tl)
}

document.addEventListener("DOMContentLoaded", initAnimations)
