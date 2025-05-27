const initAnimation = () => {
  const container = document.querySelector(".transform-circle")
  if (!container) return

  const dot = document.querySelector(".dot")
  const box = document.querySelector(".box-circle")
  const nav = document.querySelector(".navigation-circle")

  const output = document.querySelector(".output")
  let property = document.querySelector(
    'input[name="circle-property"]:checked'
  ).value

  let transformOrigin = "100px 100px"
  let localX = 100
  let localY = 100

  // Position dot in the center of the box
  const boxRect = box.getBoundingClientRect()

  // Listen for clicks on the container instead of the box
  container.addEventListener("click", (e) => {
    // Calculate position relative to the box
    localX = e.clientX - boxRect.left
    localY = e.clientY - boxRect.top

    // Update dot position using left/top
    gsap.set(dot, {
      left: localX,
      top: localY,
      x: 0,
      y: 0,
    })

    // Update transform origin
    transformOrigin = `${localX}px ${localY}px`
    output.innerHTML = `${Math.round(localX)}<span>px</span> ${Math.round(
      localY
    )}<span>px</span>`

    // Trigger animation after updating transform origin
    animateBox()
  })

  function animateBox() {
    gsap.fromTo(
      box,
      { rotation: 0, scale: 1 },
      {
        ease: "power1.inOut",
        rotation: property === "rotation" ? 360 : 0,
        scale: property === "scale" ? 0 : 1,
        repeat: property === "scale" ? 1 : 0,
        yoyo: true,
        duration: property === "scale" ? 0.6 : 1,
        transformOrigin: transformOrigin,
      }
    )
  }

  nav.addEventListener("click", (e) => {
    e.stopPropagation()
  })

  Array.from(document.getElementsByName("circle-property")).forEach((radio) =>
    radio.addEventListener("change", updateProperty)
  )

  function updateProperty() {
    property = document.querySelector(
      'input[name="circle-property"]:checked'
    ).value
    animateBox()
  }
}

document.addEventListener("DOMContentLoaded", initAnimation)
