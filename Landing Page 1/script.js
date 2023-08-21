let boxBody = document.getElementById("box_body")

//fetch data
fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(json=> {
        json.map(data=>{
            console.log(data);
            boxBody.append(productBox(data))
        })
    })

//create .box
function productBox({name, price, image}){
    let box = document.createElement("div")
    box.innerHTML =  `
    <div class="box">
        <div class="box_content">
            <h3>${name}</h3>
            <h4>$${price}</h4>
            <a href="#">DETAILS →</a>
            <div class="cart_btn">
                <p>ADD TO CART</p>
            </div>
        </div>
        <img src="${image}">
    </div>
    `
    return box
}











setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()