import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} cost ${product.price}`)
                }
            }
        }
    }
)


export const Products = () => {
    let productHTML = "<ul>"

    for (const product of products) {
        productHTML += `<li id="product--${product.id}">${product.name}</li>`
    }

    productHTML += "</ul>"

    return productHTML
}

