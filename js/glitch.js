import { controlTweens } from "./controls.js"

const initAnimation = () => {
  const container = document.querySelector(".glitch")
  if (!container) return

  const circle = container.querySelector(".circle")
  const circleInner = container.querySelector(".circle-inner")

  const tween = gsap.fromTo(
    circleInner,
    { scale: 0, paused: true },
    { scale: 1, duration: 1, paused: true }
  )

  circle.addEventListener("mouseenter", (e) => {
    tween.restart()
  })

  controlTweens(circleInner)
}

document.addEventListener("DOMContentLoaded", initAnimation)
