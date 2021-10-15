//content reducer
const GET_CONTENT_START = "ugo-blog/content/GET_CONTENT_START"
const GET_CONTENT_SUCCESS = "ugo-blog/content/GET_CONTENT_SUCCESS"
const GET_CONTENT_FAIL = "ugo-blog/content/GET_CONTENT_FAIL"

const POST_CONTENT_START = "ugo-blog/content/POST_CONTENT_START"
const POST_CONTENT_SUCCESS = "ugo-blog/content/POST_CONTENT_SUCCESS"
const POST_CONTENT_FAIL = "ugo-blog/content/POST_CONTENT_FAIL"

const PUT_CONTENT_START = "ugo-blog/content/PUT_CONTENT_START"
const PUT_CONTENT_SUCCESS = "ugo-blog/content/PUT_CONTENT_SUCCESS"
const PUT_CONTENT_FAIL = "ugo-blog/content/PUT_CONTENT_FAIL"

const DELETE_CONTENT_START = "ugo-blog/content/DELETE_CONTENT_START"
const DELETE_CONTENT_SUCCESS = "ugo-blog/content/DELETE_CONTENT_SUCCESS"
const DELETE_CONTENT_FAIL = "ugo-blog/content/DELETE_CONTENT_FAIL"



export function getContentDetailStart(){
    return {
        type:GET_CONTENT_START,
        loading:true
    }
}

export function getContentDetailSuccess(data){
    return {
        type:GET_CONTENT_SUCCESS,
        loading:false,
        data:data
    }
}

export function getContentDetailFail(error){
    return {
        type:GET_CONTENT_FAIL,
        loading:false,
        error:error
    }
}

export function postContentStart(){
    return {
        type:POST_CONTENT_START,
        loading:true
    }
}

export function postContentSuccess(resp){
    return {
        type:POST_CONTENT_SUCCESS,
        loading:false,
        resp:resp
    }
}

export function postContentFail(error){
    return {
        type:POST_CONTENT_FAIL,
        loading:false,
        error:error
    }
}

export function putContentStart(){
    return {
        type:PUT_CONTENT_START,
        loading:true
    }
}

export function putContentSuccess(resp){
    return {
        type:PUT_CONTENT_SUCCESS,
        loading:false,
        resp:resp
    }
}

export function putContentFail(error){
    return {
        type:PUT_CONTENT_FAIL,
        loading:false,
        error:error
    }
}

export function deleteContentStart(){
    return {
        type:DELETE_CONTENT_START,
        loading:true
    }
}

export function deleteContentSuccess(resp){
    return {
        type:DELETE_CONTENT_SUCCESS,
        loading:false,
        resp:resp
    }
}

export function deleteContentFail(error){
    return {
        type:DELETE_CONTENT_FAIL,
        loading:false,
        error:error
    }
}



const initialState = {
    article: "",
    createAt: "",
    id: 0,
    loading: false,
    tags: [],
    title: ""
}

export default function reducer(state = initialState , action) {

    if(action.type === GET_CONTENT_START){
        return {
            ...action.data,
            loading:action.loading
        }
    }

    if(action.type === GET_CONTENT_SUCCESS){
        return {
            ...action.data,
            loading:action.loading
        }
    }
    
    if(action.type === GET_CONTENT_FAIL){
        return {
            ...action.data,
            loading:action.loading,
            error:action.error
        }
    }
    
    if(action.type === POST_CONTENT_START){
        return {loading:action.loading}
    }

    if(action.type === POST_CONTENT_SUCCESS){
        return {resp:action.resp , loading:action.loading};
    }
    if(action.type === POST_CONTENT_FAIL){
        return {error:action.error , loading: action.loading};
    }

    if(action.type === PUT_CONTENT_START){
        return state;
    }

    if(action.type === PUT_CONTENT_SUCCESS){
        return {...state ,resp:action.resp};
    }
    if(action.type === PUT_CONTENT_FAIL){
        return {error:action.error};
    }

    if(action.type === DELETE_CONTENT_START){
        return state;
    }
    if(action.type === DELETE_CONTENT_SUCCESS){
        return {...state ,resp:action.resp};
    }
    if(action.type === DELETE_CONTENT_FAIL){
        return {...state,error:action.error};
    }
    

    return state;
}