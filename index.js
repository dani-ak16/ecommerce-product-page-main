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
const cartDetailsContainer = document.querySelector(".cart-details-container")
const deleteBtn = document.getElementById("delete-btn")
const productQuantity = document.getElementById("[product-quantity")
const productTotal = document.getElementById("product-total")
const cartPanel = document.querySelector(".cart-panel")
const addToCart = document.querySelector (".add-to-cart")

const images = [
    `url(./images/image-product-1.jpg)`,
    `url(./images/image-product-2.jpg)`,
    `url(./images/image-product-3.jpg)`,
    `url(./images/image-product-4.jpg)`
]

let count = 0
let quantity = 0

addToCart.addEventListener("click", () => {
    cartDetailsContainer.innerHTML = `
        <div class="cart-details">
            <img src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
              <span>Fall Limited Edition Sneakers</span>
              <div>
                <span>$125.00</span>
                <span id="product-quantity"></span>
                <span id="product-total"></span>
              </div>
            </div>
            <button id="delete-btn"><img src="./images/icon-delete.svg" alt=""></button>
        </div>

        <button class="btn checkout-btn">Checkout</button>
    `
})

menuBtn.addEventListener("click", () => {
    menuPanel.classList.add("active")
    overlay.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    menuPanel.classList.toggle("active")
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

cartBtn.addEventListener("click", () => {
    cartPanel.style.display = "block"
})

deleteBtn.addEventListener("click", () => {

})