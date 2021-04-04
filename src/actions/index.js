import { actionCart } from "./actionTypes"

export const addToCart = (product) =>{
    return {
        type:actionCart.add,
        data: {
            id : product.id,
            name : product.name
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