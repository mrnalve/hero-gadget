import { getLocalData } from "../utilities/fakeDB";

export const productsAndCartData = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()
    const savedCart = getLocalData();
    let cartArray = []
    for (const id in savedCart) {
        let foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
            foundProduct.quantity = savedCart[id]
            cartArray.push(foundProduct)
        }
    }
    return {cartArray, products}
}

