/*___________GALLERY____________*/ 
gsap.registerPlugin(ScrollTrigger);

gsap.to(".gallery-entry", {
    transform: "translateX(calc( (-100% / 3) * 2))", //To get to 66.66% since there are 3 slides in .gallery-entry
    ease: "none",
    scrollTrigger: {
      trigger: ".gallery",
      start: "bottom bottom",
      end: "+=" + (window.innerHeight * 5),
      scrub: true,
      pin: true,
    }
});



/*___________PRODCUT-CARD____________*/ 
const titles = gsap.utils.toArray(".image-p-text")
const tl = gsap.timeline({repeat:-1, repeatDelay: -0.09})

titles.forEach(title => {
    const splitTitle = new SplitType(title)

    tl
    
        .from(splitTitle.chars, {
            opacity: 0,
            y: 20,
            rotateX: -90,
            stagger: 0.1,
        }, "<")

        .to(splitTitle.chars, {
            opacity: 0,
            y: -20,
            rotateX: 90,
            stagger: 0.1,
        }, "<1")
})

  