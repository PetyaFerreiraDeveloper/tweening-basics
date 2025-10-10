const initAnimations = () => {

  const tl = gsap.timeline({ defaults: { duration: 2, ease: "power2.out" } })

  tl.from('.text', {
    opacity: 0,
    x: 50,
  })
  .to(
    ".moving-box", {
    x: "-100%",
  }, "<")
    .from(
    '.image', {
      x: "-100%",
    }, "<") 
  
}

document.addEventListener("DOMContentLoaded", initAnimations)
