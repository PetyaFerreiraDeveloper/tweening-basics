const initAnimations = () => {
  const moreButtons = document.querySelectorAll(".more-buttons-item")

  moreButtons.forEach((item) => {
    const text = item.querySelector(".more-buttons-text")
    const dot = item.querySelector(".more-buttons-dot")
    const tl = gsap
      .timeline({ paused: true })
      .to(dot, {
        backgroundColor: "orange",
        duration: 0.3,
        scale: 1.5,
      })
      .to(
        text,
        {
          color: "white",
          duration: 0.3,
          x: 10,
          scale: 1.3,
          transformOrigin: "left center",
        },
        "<"
      )

    item.addEventListener("mouseenter", () => {
      tl.play()
    })
    item.addEventListener("mouseleave", () => {
      tl.reverse()
    })
  })
}

document.addEventListener("DOMContentLoaded", initAnimations)
