gsap.registerPlugin(ScrollTrigger);

gsap.from("h1 div", {translateY: "-100%", delay: 0.5, stagger: 0.08})

gsap.to(".header h2", {
    color: "black",
    stagger: 1,
    scrollTrigger: {
      trigger: ".header h2",
      start: "top 75%",
      end: "bottom top",
    },
  });

  gsap.to(".sub-header", {
    color: "black",
    stagger: 1,
    scrollTrigger: {
      trigger: ".sub-header",
      start: "top 80%",
      end: "bottom top",
    },
  });