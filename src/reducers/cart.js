import { actionCart } from "../actions/actionTypes";

const cartReducer = (state = [], action) => {
    if(action.type == actionCart.add){
        var current = state.find(x=>x.product_id == action.data.id);
        if(current != undefined){
            return state.map(cart => cart.product_id == action.data.id ? {...cart, amount: ++cart.amount} : cart)
        }else{
            return [...state,{
                product_id : action.data.id,
                name: action.data.name,
                amount : 1
            }]
        }
    }else if(action.type == actionCart.remove){
        var current = state.find(x=>x.product_id == action.data.id);
        if(current != undefined){
            return state.map(cart => cart.product_id == action.data.id ? {...cart, amount: --cart.amount} : cart).filter(cart => cart.amount > 0);
        }
    }
    else{
        return state;
    }
}


export default cartReducer;