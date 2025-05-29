import { controlTweens } from "./controls.js"

const initAnimation = () => {
  const fromAndToContainer = document.querySelector(".container.from-and-to")
  if (!fromAndToContainer) {
    return
  }

  const fredTween = gsap.from(".fred", { x: 400, duration: 3, paused: true })

  controlTweens(fredTween)
}

document.addEventListener("DOMContentLoaded", initAnimation)
