const initAnimation = () => {
  const container = document.querySelector(".transform-jeep")
  if (!container) return

  const truck = gsap.to('.truck', {transformOrigin: '65px 160px', rotation: -50, repeat: 1, yoyo: true, paused: true }) 

  container.addEventListener('click', () => {
    truck.restart()
  })

}

document.addEventListener("DOMContentLoaded", initAnimation)