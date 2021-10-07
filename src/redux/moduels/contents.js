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
        loding:true
    }
}

export function getContentDetailSuccess(data){
    console.log('asd1')
    return {
        type:GET_CONTENT_DETAIL_SUCCESS,
        loding:false,
        data:data
    }
}

export function getContentDetailFail(error){
    return {
        type:GET_CONTENT_DETAIL_FAIL,
        loding:false,
        error:error
    }
}

export function postContentStart(){
    return {
        type:POST_CONTENT_START,
        loding:true
    }
}

export function postContentSuccess(data){
    return {
        type:POST_CONTENT_SUCCESS,
        loding:false,
        data:data
    }
}

export function postContentFail(error){
    return {
        type:POST_CONTENT_FAIL,
        loding:false,
        error:error
    }
}

const initialState = {
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
        console.log(action.error);
        return{
            
        }
    }

    if(action.type === GET_CONTENT_DETAIL_START){
        console.log('action',action);
    }

    if(action.type === GET_CONTENT_DETAIL_SUCCESS){
        console.log('action',action);
        return action.data;
    }
    
    if(action.type === GET_CONTENT_DETAIL_FAIL){
        console.log('action',action);
    }

    return state;
}