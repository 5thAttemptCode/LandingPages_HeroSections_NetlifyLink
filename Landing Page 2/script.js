gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

const vh = (coef) => window.innerHeight * (coef/100);


tl.to("#home", {
    scrollTrigger: {
        trigger: "#home",
        pin: true,
        start: "top top",
        end: vh(220) + "top"
    }
})

tl.to(".box_one", {
    width: "50%",
    scrollTrigger: {
        trigger:".box_one",
        start: vh(5) + "top",
        end: vh(100) + "top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
    }
})

tl.to(".box_two", {
    height: "30%",
    scrollTrigger: {
        trigger:".box_one",
        start: vh(100) + "top",
        end: vh(120) + "top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
    }
})

tl.to(".box_three", {
    height: "70%",
    scrollTrigger: {
        trigger:".box_one",
        start: vh(120) + "top",
        end: vh(140) + "top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
    }
})

tl.to(".box_four", {
    width: "30%",
    scrollTrigger: {
        trigger:".box_one",
        start: vh(140) + "top",
        end: vh(160) + "top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
    }
})

tl.to(".box_five", {
    height: "30%",
    scrollTrigger: {
        trigger:".box_one",
        start: vh(160) + "top",
        end: vh(180) + "top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
    }
})

tl.to(".box_six", {
    width: "15%",
    scrollTrigger: {
        trigger:".box_one",
        start: vh(180) + "top",
        end: vh(200) + "top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
    }
})


