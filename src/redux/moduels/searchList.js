const GET_SEARCH_LIST_START = "ugo-blog/serchList/GET_SEARCH_LIST_START"
const GET_SEARCH_LIST_SUCCESS = "ugo-blog/serchList/GET_SEARCH_LIST_SUCCESS"
const GET_SEARCH_LIST_FAIL = "ugo-blog/serchList/GET_SEARCH_LIST_FAIL"
const HANDLE_PAGE_NUM = "ugo-blog/serchList/HANDLE_PAGE_NUM"


export function getSearchListStart(){
    return{
        type:GET_SEARCH_LIST_START,
        loading:true
    }
}
export function getSearchListSuccess(data,keyword,page,totalCount) {
    return{
        type:GET_SEARCH_LIST_SUCCESS,
        loding:false,
        data,
        keyword,
        page,
        totalCount
    }
}
export function getSearchListFail(error) {
    return{
        type:GET_SEARCH_LIST_FAIL,
        loading:false,
        error
    }
}
export function handlePageNum(page) {
    return{
        type:HANDLE_PAGE_NUM,
        page
    }
}

const initialState = {
    data:[],
    loading:false,
    totalCount:30,
    page:1,
    keyword:''
}

export default function reducer(state = initialState , action) {
    if(action.type === HANDLE_PAGE_NUM){
        return{
            ...state,
            page:action.page
        }
    }
    if(action.type === GET_SEARCH_LIST_START){
        return {
        ...state,
        loading: action.loading,
      };
    }
    if(action.type === GET_SEARCH_LIST_SUCCESS){
        return {
            data:action.data,
            loading:action.loading,
            keyword:action.keyword,
            page:action.page,
            totalCount:action.totalCount
        };
    }
    if(action.type === GET_SEARCH_LIST_FAIL){
        return{
            ...state,
            error:action.error
        }
    }
    return state;
}