const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")
const menuPanel = document.querySelector(".menu-panel")
const cartBtn = document.getElementById("cart-btn")
const previousBtn = document.getElementById("previous-btn")
const nextBtn = document.getElementById("next-btn")
const decrementBtn = document.getElementById("decrement-btn")
const incrementBtn = document.getElementById("increment-btn")
const itemQuantity = document.getElementById("item-quantity")
const productImage = document.querySelector(".product-image")
const overlay = document.getElementById("overlay")
const cartQuantity = document.getElementById("cart-quantity")

const images = [
    `url(./images/image-product-1.jpg)`,
    `url(./images/image-product-2.jpg)`,
    `url(./images/image-product-3.jpg)`,
    `url(./images/image-product-4.jpg)`
]

let count = 0
let quantity = 0

menuBtn.addEventListener("click", () => {
    menuPanel.style.display = "flex"
    overlay.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    menuPanel.style.display = "none"
    overlay.classList.toggle("active")
})

nextBtn.addEventListener("click", () => {
    if (count < images.length - 1) {
        count += 1
        productImage.style.backgroundImage = `${images[count]}`
    } else {
        count = 0
        productImage.style.backgroundImage = `${images[count]}`
    }
})

previousBtn.addEventListener("click", () => {
    if (count === 0) {
        count = images.length - 1
        productImage.style.backgroundImage = `${images[count]}`
    } else {
        count -= 1
        productImage.style.backgroundImage = `${images[count]}`
    }
})

incrementBtn.addEventListener("click", () => {
    quantity += 1
    itemQuantity.innerText = quantity
    cartQuantity.innerText = quantity
    cartQuantity.style.display = `block`
})

decrementBtn.addEventListener("click", () => {
    if (quantity === 0) {
        itemQuantity.innerText = quantity
        return
    } else if (quantity === 1) {
        cartQuantity.innerText = ``
        cartQuantity.style.display = `none`
        quantity -= 1
        itemQuantity.innerText = quantity
    }else {
        quantity -= 1
        itemQuantity.innerText = quantity
        cartQuantity.innerText = quantity
        
    }
    
})