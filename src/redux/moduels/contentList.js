const GET_CONTENT_LIST_START = "ugo-blog/content/GET_CONTENT_LIST_START"
const GET_CONTENT_LIST_SUCCESS = "ugo-blog/content/GET_CONTENT_LIST_SUCCESS"
const GET_CONTENT_LIST_FAIL = "ugo-blog/content/GET_CONTENT_LIST_FAIL"
const GET_CONTENT_HANDLE_PAGE = "ugo-blog/content/GET_CONTENT_HANDLE_PAGE"
const HANDLE_PAGE_NUM = "ugo-blog/content/serchList/HANDLE_PAGE_NUM"
const RESET_CONTENT_LIST_STATE="ugo-blog/content/serchList/RESET_CONTENT_LIST_STATE";

export function resetContentListState() {
    return{
        type:RESET_CONTENT_LIST_STATE
    }
}

export function handlePageNum(page) {
    return{
        type:HANDLE_PAGE_NUM,
        page
    }
}
export function getContentListStart(){
    return {
        type:GET_CONTENT_LIST_START,
        loading:true,
    }
}

export function getContentListSuccess(data,category,page,totalCount){
    return{
        type:GET_CONTENT_LIST_SUCCESS,
        loading:false,
        data,
        category,
        page,
        totalCount,
    }
}
 
export function getContentListFail(error){
    return{
        type:GET_CONTENT_LIST_FAIL,
        loading:false,
        error
    }
}

export function getContentHandlePage(page){
    return{
        type:GET_CONTENT_HANDLE_PAGE,
        page
    }
}

const initialState = {
                       loading:true,
                       page:1,
                       category:'',
                       data:[],
                       totalCount:30
                     };

export default function reducer(state = initialState , action) {

    if(action.type === HANDLE_PAGE_NUM){
        return{
            ...state,
            page:action.page
        }
    }
    if(action.type === GET_CONTENT_LIST_START){
        return {
            ...state,
            loading:action.loading
        }
    }

    if(action.type === GET_CONTENT_LIST_SUCCESS){
        if(state.category !== action.category){
            return {
                category: action.category,
                page:  1,
                data: action.data,
                loading:action.loading,
                totalCount:action.totalCount
              };
        }else{
            return {
                category: action.category,
                page:  action.page,
                data: action.data,
                loading:action.loading,
                totalCount:action.totalCount
              };
        }
    }

    if(action.type === GET_CONTENT_LIST_FAIL){
        return{
            ...state,
            error: action.error,
            loading:action.loading
        }
    }

    if(action.type === GET_CONTENT_HANDLE_PAGE){
        return{
            ...state,
            page:action.page
        }
    }
    if(action.type === RESET_CONTENT_LIST_STATE){
        return initialState;
    }
    
    return state;
}