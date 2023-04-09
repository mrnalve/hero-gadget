// Add data to local storage
const addToDb = id => {
    let shoppingCart = {}

    // get previous data from local storage
    let storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    let quantity = shoppingCart[id]
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// Get stored data from cart
const getLocalData = () => {
    let shoppingCart = {}

    // get previous data from local storage
    let storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

// Remove a specific element from local storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

// Clear all data from local storage
const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')

export { addToDb, getLocalData, removeFromDb, deleteShoppingCart }