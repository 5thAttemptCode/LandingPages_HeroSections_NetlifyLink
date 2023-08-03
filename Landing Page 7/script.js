const cursor = document.querySelector(".gallery-button")
const gallery = document.querySelector(".gallery-entry")

const rect = cursor.getBoundingClientRect()
const cursorX = rect.left
const cursorY = rect.top

gallery.addEventListener("mousemove", function(e) {
    cursor.style.setProperty('--x', `${e.clientX - cursorX - 75}px`)
    cursor.style.setProperty('--y', `${e.clientY - cursorY - 75}px`)
})


