import { actionAuth } from "../actions/actionTypes";

const authReducer = (state = {}, action) => {
    switch(action.type){
        case actionAuth.login :
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', action.data.email);
            return {check : true, user : action.data.email};
        case actionAuth.logout :
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user')
            return {check : false, user : "Guest"};
        default : return {
            check : localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false,
            user : localStorage.getItem('user') ? localStorage.getItem('user') : "Guest"};
    }
}

export default authReducer;