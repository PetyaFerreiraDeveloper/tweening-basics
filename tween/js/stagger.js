import { controlTweens } from "./controls.js"

const initAnimation = () => {
  const freds = document.querySelector(".freds")
  if (!freds) {
    return
  }

  const fredsTween = gsap.to(".freds img", {
    y: -100,
    stagger: {
      amount: 0.5,
      from: "edges",
    },
  })

  controlTweens(fredsTween)
}

document.addEventListener("DOMContentLoaded", initAnimation)
