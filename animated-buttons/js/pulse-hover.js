const initAnimations = () => {
  const pulseHoverCta = document.querySelector(".pulse-hover-cta")

  const scaleTween = gsap.to(pulseHoverCta, {
    scale: 1,
    repeat: 15,
    yoyo: true,
    paused: true,
  })

  pulseHoverCta.addEventListener("mouseenter", () => {
    scaleTween.restart()
  })

  pulseHoverCta.addEventListener("mouseleave", () => {
    scaleTween.pause()
    gsap.to(pulseHoverCta, { scale: 0.8 })
  })
}

document.addEventListener("DOMContentLoaded", initAnimations)
