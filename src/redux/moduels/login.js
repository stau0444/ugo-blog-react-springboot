const POST_LOGIN_START = "ugo-blog/login/POST_LOGIN_START"
const POST_LOGIN_SUCCESS = "ugo-blog/login/POST_LOGIN_SUCCESS"
const POST_LOGIN_FAIL = "ugo-blog/login/POST_LOGIN_FAIL"

export const postLoginStart = () => {
    console.log("postLoginStart")
    return{
        type:POST_LOGIN_START,
        loading:true,
    }
}

export const postLoginSuccess = () => {
    console.log("postLoginSuccess")
    return{
        type:POST_LOGIN_SUCCESS,
        loading:false,
    }
}

export const postLoginFail = () => {
    console.log("postLoginFail")
    return{
        type:POST_LOGIN_FAIL,
        loading:false,
    }
}

const initialState = {};

export default function  reducer(state = initialState, action) {
    if(action.type === POST_LOGIN_START){
        return {
            ...state,
            loginState:false
        };
    } 
    if(action.type === POST_LOGIN_SUCCESS){
        return {
            ...state,
            loginState:true
        };
    }
    if(action.type === POST_LOGIN_FAIL){
        return{
            loginState:false,
            error:action.error
        }
    }
}