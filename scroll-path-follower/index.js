gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

gsap.defaults({ease: 'none'})

const main = gsap
  .timeline({
    scrollTrigger: {
      scroller: ".scroll-window",
      trigger: ".svg",
      scrub: 6,
      start: "top top",
      end: 'max',
    },
  })
  // .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
  .to(
    ".ball01",
    {
      motionPath: {
        path: ".theLine",
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
      },
      duration: 4,
    },
    0
  );

