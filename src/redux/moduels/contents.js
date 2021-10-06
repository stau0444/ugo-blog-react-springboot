//content reducer
const POST_CONTENT_START = "ugo-blog/contents/POST_CONTENT_START"
const POST_CONTENT_SUCCESS = "ugo-blog/content/POST_CONTENT_SUCCESS"
const POST_CONTENT_FAIL = "ugo-blog/content/POST_CONTENT_FAIL"


export function postContentStart(){
    return {
        type:POST_CONTENT_START,
        loding:true
    }
}

export function postContentSuccess(resp){
    return {
        type:POST_CONTENT_SUCCESS,
        loding:false,
        resp:resp
    }
}

export function postContentFail(error){
    return {
        type:POST_CONTENT_FAIL,
        loding:false,
        error:error
    }
}
const initialState = {}

export default function reducer(state = initialState , action) {

    if(action.type === POST_CONTENT_START){
        console.log(action);
    }

    if(action.type === POST_CONTENT_SUCCESS){
        console.log('resp',action.resp);
        return{

        }
    }
    if(action.type === POST_CONTENT_FAIL){
        console.log(action.error);
        return{

        }
    }

    return state;
}