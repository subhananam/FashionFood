import { actionAuth, actionCart } from "./actionTypes"

export const addToCart = (product) =>{
    return {
        type:actionCart.add,
        data: {
            id : product.id,
            name : product.name,
            price: product.price
        }
    }
}
export const removeFromCart = (product) =>{
    return {
        type:actionCart.remove,
        data: {
            id : product.id,
            name : product.name
        }
    }
}
export const removeCartByID = (cart) =>{
    console.log(cart)
    return {
        type:actionCart.removeByID,
        data: {
            id : cart.product_id,
        }
    }
}
export const removeAllCart = () =>{
    return {
        type:actionCart.removeAll,
    }
}

export const signIn = (email) =>{
    return {
        type:actionAuth.login,
        data: {
            email
        }
    }
}
export const signOut = () =>{
    return {
        type:actionAuth.logout,
    }
}