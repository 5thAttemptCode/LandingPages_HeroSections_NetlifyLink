const tl = gsap.timeline()
tl.to(".container", {opacity: 1, stagger: 0.5}, 0.2)


const containers = document.querySelectorAll('.container')

function clearActiveContainers() {
    containers.forEach(function(container) {
        container.classList.remove('active')
    })
}

containers.forEach(function(container, index) {
    container.onclick = function() {
        if(containers[index].classList.contains("active")){
            containers[index].classList.remove("active")
        } else {
            clearActiveContainers(index)
            containers[index].classList.add("active")
        }
    }
})

