import { actionCart } from "../actions/actionTypes";

const cartReducer = (state = [], action) => {
    if(action.type == actionCart.add){
        var current = state.find(x=>x.product_id == action.data.id);
        var newState = [];
        if(current != undefined){
            newState = state.map(cart => cart.product_id == action.data.id ? {...cart, amount: ++cart.amount} : cart)
        }else{
            newState = [...state,{
                product_id : action.data.id,
                name: action.data.name,
                amount : 1,
                price: action.data.price
            }]
        }
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(newState))
        return newState;
    }else if(action.type == actionCart.remove){
        var newState = state.map(cart => cart.product_id == action.data.id ? {...cart, amount: --cart.amount} : cart).filter(cart => cart.amount > 0);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(newState))
        return newState;
    }
    else if(action.type == actionCart.removeByID){
        var newState = state.filter(cart => cart.product_id != action.data.id);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(newState))
        return newState;
    }
    else if(action.type == actionCart.removeAll){
        localStorage.removeItem('cart');
        return [];
    }
    else{
        var cart = JSON.parse(localStorage.getItem('cart') || "[]") ;
        return cart;
    }
}


export default cartReducer;