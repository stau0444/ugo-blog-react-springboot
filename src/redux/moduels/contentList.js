const GET_CONTENT_LIST_START = "ugo-blog/content/GET_CONTENT_LIST_START"
const GET_CONTENT_LIST_SUCCESS = "ugo-blog/content/GET_CONTENT_LIST_SUCCESS"
const GET_CONTENT_LIST_FAIL = "ugo-blog/content/GET_CONTENT_LIST_FAIL"


export function getContentListStart(){
    return {
        type:GET_CONTENT_LIST_START,
        loading:true,
    }
}

export function getContentListSuccess(data,keyword){
    return{
        type:GET_CONTENT_LIST_SUCCESS,
        loading:false,
        data,
        keyword
    }
}

export function getContentListFail(error){
    return{
        type:GET_CONTENT_LIST_FAIL,
        loading:false,
        error
    }
}

const initialState = {
                       keyword:'',
                       data:[]
                     };

export default function reducer(state = initialState , action) {

    if(action.type === GET_CONTENT_LIST_START){
        return state;
    }

    if(action.type === GET_CONTENT_LIST_SUCCESS){
        console.log(action);
        return {
          keyword: action.keyword,
          data: action.data,
        };
    }

    if(action.type === GET_CONTENT_LIST_FAIL){
        console.log(action);
        return{
            ...state,
            error: action.error
        }
    }
    return state;
}