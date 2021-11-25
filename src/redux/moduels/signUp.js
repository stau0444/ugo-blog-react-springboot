const GET_EMAIL_VERIFY_START = "ugo-blog/signUp/GET_EMAIL_VERIFY_START";
const GET_EMAIL_VERIFY_SUCCESS = "ugo-blog/signUp/GET_EMAIL_VERIFY_SUCCESS";
const GET_EMAIL_VERIFY_FAIL = "ugo-blog/signUp/GET_EMAIL_VERIFY_FAIL";

export function emailVerifyStart(){
    return{
        type:GET_EMAIL_VERIFY_START,
        loading:true
    }
}

export function emailVerifySuccess(){
    return{
        type:GET_EMAIL_VERIFY_SUCCESS,
        loading:false
    }
}

export function emailVerifyFail(){
    return{
        type:GET_EMAIL_VERIFY_FAIL,
        loading:false
    }
}

const initialState = {
    loding:false
}

export default function reducer(state=initialState , action) {
    if(action.type === GET_EMAIL_VERIFY_START){
        return{
            loading:true
        }
    }
    if(action.type === GET_EMAIL_VERIFY_SUCCESS){
        return{
            loading:false
        }
    }
    if(action.type === GET_EMAIL_VERIFY_FAIL){
        return{
            loading:false
        }
    }
    return state;
}