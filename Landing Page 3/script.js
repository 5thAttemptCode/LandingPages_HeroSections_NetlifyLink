var tl = gsap.timeline();

const boxes = document.querySelectorAll('.box');

function clearActiveContainers() {
    boxes.forEach(function(box) {
        box.classList.remove('active');
    });
}

boxes.forEach(function(box, index) {
    box.onclick = function() {
        if(boxes[index].classList.contains("active")){
            boxes[index].classList.remove("active")
        } else {
            clearActiveContainers(index)
            boxes[index].classList.add("active")
        }
    }
});

// tl.to(".box", {opacity: 1, stagger: 0.7}, 0.5)