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
const productQuantity = document.getElementById("product-quantity")
const productTotal = document.getElementById("product-total")
const cartPanel = document.querySelector(".cart-panel")
const addToCart = document.querySelector(".add-to-cart")
const checkoutBtn = document.querySelector(".checkout-btn")
const cartDetails = document.querySelector(".cart-details")
const cartEmpty = document.getElementById("cart-empty")
const lightbox = document.querySelector(".lightbox")
const lightboxCloseBtn = document.getElementById("lightbox-close-btn")
const lightboxNextBtn = document.getElementById("lightbox-next-btn")
const lightboxPreviousBtn = document.getElementById("lightbox-previous-btn")
const lightboxProductImage = document.getElementById("lightbox-product-image")
const lightboxThumbnailImages = document.getElementsByClassName("lightbox-thumbnail-image")

const images = [
    `url(./images/image-product-1.jpg)`,
    `url(./images/image-product-2.jpg)`,
    `url(./images/image-product-3.jpg)`,
    `url(./images/image-product-4.jpg)`
]

let count = 0
let quantity = 0
let removedElements = []

const renderCart = () => {
    if (count === 0) {
        removedElements.push(cartDetails, checkoutBtn)
        cartDetails.remove()
        checkoutBtn.remove()
        if (!document.contains(cartEmpty)){
            cartDetailsContainer.appendChild(removedElements[2])
        }
    } else {
        removedElements.push(cartEmpty)
        cartEmpty.remove()
    }
}

renderCart()

addToCart.addEventListener("click", () => {
    removedElements.push(cartEmpty)
    cartEmpty.remove()
    cartDetailsContainer.appendChild(removedElements[0])
    cartPanel.appendChild(removedElements[1])
    cartQuantity.style.display = `block`
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
    productQuantity.innerText = `x ${quantity}`
    productTotal.innerText = `$${(quantity * 125).toFixed(2)}`
    cartQuantity.innerText = quantity
})

decrementBtn.addEventListener("click", () => {
    if (quantity === 0) {
        itemQuantity.innerText = quantity
        return
    } else if (quantity === 1) {
        cartQuantity.style.display = `none`
        quantity -= 1
        itemQuantity.innerText = quantity
        productQuantity.innerText = `x ${quantity}`
        productTotal.innerText = `$${(quantity * 125).toFixed(2)}`
        renderCart()
    }else {
        quantity -= 1
        itemQuantity.innerText = quantity
        cartQuantity.innerText = quantity
        productQuantity.innerText = `x ${quantity}`
        productTotal.innerText = `$${(quantity * 125).toFixed(2)}`
    }  
})

cartBtn.addEventListener("click", () => {
    cartPanel.classList.add("active")
})

deleteBtn.addEventListener("click", () => {
    quantity = 0
    itemQuantity.innerText = quantity
    cartQuantity.style.display = `none`
    renderCart()
})

productImage.addEventListener("click", () => {
    lightbox.classList.add("active")
})

lightboxCloseBtn.addEventListener("click", () => {
    lightbox.classList.toggle("active")
})

lightboxNextBtn.addEventListener("click", () => {
    if (count < images.length - 1) {
        count += 1
        lightboxProductImage.style.backgroundImage = `${images[count]}`
        if (lightboxThumbnailImages[count].classList.contains("active")){
            return
            lightboxThumbnailImages[count].classList.toggle('active')
        }else {
            lightboxThumbnailImages[count].classList.add('active')
            lightboxThumbnailImages[count-1].classList.remove('active')
        }
    } else {
        count = 0
        lightboxProductImage.style.backgroundImage = `${images[count]}`
        lightboxThumbnailImages[count].classList.add('active')
        lightboxThumbnailImages[images.length - 1].classList.remove('active')
    }
})

lightboxPreviousBtn.addEventListener("click", () => {
    if (count === 0) {
        count = images.length - 1
        lightboxProductImage.style.backgroundImage = `${images[count]}`
        // thumbnailImages[count].classList.toggle('active')
    } else {
        count -= 1
        lightboxProductImage.style.backgroundImage = `${images[count]}`
        // thumbnailImages[count].classList.toggle('active')
    }
})
