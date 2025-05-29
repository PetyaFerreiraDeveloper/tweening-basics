const initAnimations = () => {
  const item = document.querySelector(".item")

  const buttonAnimation = gsap
    .timeline({ paused: true })
    .to(".text", { color: "white", x: 10, duration: 0.3 })
    .to(".dot", { backgroundColor: "orange", scale: 1.5, duration: 0.3 }, "<")

  item.addEventListener("mouseenter", () => {
    buttonAnimation.play()
  })

  item.addEventListener("mouseleave", () => {
    buttonAnimation.reverse()
  })
}

document.addEventListener("DOMContentLoaded", initAnimations)
