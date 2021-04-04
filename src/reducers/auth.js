const authReducer = (state = {isLogged : false, user: "Guest"}, action) => {
    switch(action.type){
        case 'SIGN_IN' :
            return {isLogged : true, user : action.user};
        case 'SIGN_OUT' :
            return {isLogged : false, user : "Guest"};
        default : return {isLogged : false, user : "Guest"};
    }
}

export default authReducer;