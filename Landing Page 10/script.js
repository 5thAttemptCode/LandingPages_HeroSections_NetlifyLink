gsap.registerPlugin(ScrollTrigger);

    gsap.to("body", {
    background: "#c0c0a4",
    duration: 0.3,
    scrollTrigger: {
        trigger: "#two",
        start: "top 75%",
        // end: "bottom 80%",
        // markers: true,
        toggleActions: "restart reverse restart reverse",
    }
})