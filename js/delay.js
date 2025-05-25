import { controlTweens } from "./controls.js"
const initAnimation = () => {
  const greenTween = gsap.to(".green", { x: 400, y: 400, duration: 3 })
  const pinkTween = gsap.to(".pink", {
    x: 400,
    y: 400,
    duration: 3,
    delay: 1,
    repeat: 3,
  })

  controlTweens(greenTween, pinkTween)
}

document.addEventListener("DOMContentLoaded", initAnimation)
