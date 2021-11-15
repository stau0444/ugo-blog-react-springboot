const POST_LOGIN_START = "ugo-blog/login/POST_LOGIN_START"
const POST_LOGIN_SUCCESS = "ugo-blog/login/POST_LOGIN_SUCCESS"
const POST_LOGIN_FAIL = "ugo-blog/login/POST_LOGIN_FAIL"
const POST_LOGOUT = "ugo-blog/login/POST_LOGOUT"



export const postLogOut = () => {
    console.log("postLogOut")
    return{
        type:POST_LOGOUT,
        loading:false,
    }
}

export const postLoginStart = () => {
    return{
        type:POST_LOGIN_START,
        loading:true,
    }
}

export const postLoginSuccess = (loginState) => {
    console.log("postLoginSuccess")
    return{
        type:POST_LOGIN_SUCCESS,
        loading:false,
        loginState
    }
}

export const postLoginFail = () => {
    console.log("postLoginFail")
    return{
        type:POST_LOGIN_FAIL,
        loading:false,
    }
}

const initialState = {
    login:false,
    userInfo:{
        
    }
};

export default function  reducer(state = initialState, action) {
    if(action.type === POST_LOGOUT){
        console.log("logOut",state)
        return {...initialState};
    }
    if(action.type === POST_LOGIN_START){
        return {
            ...state,
            loginState:false
        };
    } 
    if(action.type === POST_LOGIN_SUCCESS){
        const {email,emailSubscribe,id,signUpAt,username} = action.loginState.userInfo;
        return {
          login: action.loginState.login,
          userInfo: {
            email,
            emailSubscribe,
            id,
            signUpAt,
            username,
          },
        };
    }
    if(action.type === POST_LOGIN_FAIL){
        return{
            loginState:false,
            error:action.error
        }
    }
    return state;
}