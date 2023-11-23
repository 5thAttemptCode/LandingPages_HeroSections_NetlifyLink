gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    left: "-50%",
    scrollTrigger: {
        trigger:"#container",
        start: "top top",
        pin: true,
        scrub: true, 
        toggleActions: "restart reverse restart reverse",
    }
})


//DATE
const currentDate = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
const dateDisplay = currentDate.toLocaleDateString(undefined, options)
document.getElementById('todayDate').textContent = dateDisplay


//TIME
const updateTime = () => {
    const now = new Date()
    const time = now.toLocaleTimeString()
    document.getElementById('currentTime').textContent = time
};
setInterval(updateTime, 1000)
