const initAnimations = () => {

  const tl = gsap.timeline({ defaults: { duration: 1.6, ease: "power2.out" } })

  gsap.set(".reveal", { scaleX: 1 });
  gsap.set(".image", { x: -20 });

  tl
    // peel slides from right → left (revealing from left side)
    .to(
      ".reveal",
      { scaleX: 0, transformOrigin: "right center", stagger: 0.1 },
      0
    )
    // image slides gently into place (optional depth)
    .to(".image", { x: 0, duration: 1.2 }, 0)
    // text animation
    .from(".text", { opacity: 0, x: 50 }, 0.2)
    .to(".moving-box", { x: "-100%" }, 0.2);
  
}

document.addEventListener("DOMContentLoaded", initAnimations)
