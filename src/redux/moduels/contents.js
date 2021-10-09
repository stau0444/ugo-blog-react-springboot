//content reducer
const POST_CONTENT_START = "ugo-blog/contents/POST_CONTENT_START"
const POST_CONTENT_SUCCESS = "ugo-blog/content/POST_CONTENT_SUCCESS"
const POST_CONTENT_FAIL = "ugo-blog/content/POST_CONTENT_FAIL"
const GET_CONTENT_DETAIL_START = "ugo-blog/content/GET_CONTENT_DETAIL_START"
const GET_CONTENT_DETAIL_SUCCESS = "ugo-blog/content/GET_CONTENT_DETAIL_SUCCESS"
const GET_CONTENT_DETAIL_FAIL = "ugo-blog/content/GET_CONTENT_DETAIL_FAIL"


export function getContentDetailStart(){
    return {
        type:GET_CONTENT_DETAIL_START,
        loading:true
    }
}

export function getContentDetailSuccess(data){
    return {
        type:GET_CONTENT_DETAIL_SUCCESS,
        loading:false,
        data:data
    }
}

export function getContentDetailFail(error){
    return {
        type:GET_CONTENT_DETAIL_FAIL,
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

export function postContentSuccess(data){
    return {
        type:POST_CONTENT_SUCCESS,
        loading:false,
        data:data
    }
}

export function postContentFail(error){
    return {
        type:POST_CONTENT_FAIL,
        loading:false,
        error:error
    }
}

const initialState = {
    loading:false,
    id:0,
    title:'',
    createAt:'',
    tags:[],
    article:""
}

export default function reducer(state = initialState , action) {

    if(action.type === POST_CONTENT_START){
        return state;
    }

    if(action.type === POST_CONTENT_SUCCESS){
        const data = action.data;
        return{
            ...state,
            data:{
                id:data.id,
                title:data.title,
                createdAt:data.createdAt,
                tags:data.tags,
                article:data.article
            }
        }
    }
    if(action.type === POST_CONTENT_FAIL){
        return{
            
        }
    }

    if(action.type === GET_CONTENT_DETAIL_START){
        return {
            ...action.data,
            loading:action.loading
        }
    }

    if(action.type === GET_CONTENT_DETAIL_SUCCESS){
        return {
            ...action.data,
            loading:action.loading
        }
    }
    
    if(action.type === GET_CONTENT_DETAIL_FAIL){
        return {
            ...action.data,
            loading:action.loading,
            error:action.error
        }
    }

    return state;
}