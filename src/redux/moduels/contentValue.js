const CONTENT_HANDLE_VALUE = "ugo-blog/contentValue/CONTENT_HANDLE_VALUE"
const CONTENT_RESET_VALUE = "ugo-blog/contentValue/CONTENT_RESET_VALUE"

export function handleContentValue(contentValue) {
    return{
        type:CONTENT_HANDLE_VALUE,
        contentValue
    }
}
export function resetContentValue() {
    return{
        type:CONTENT_RESET_VALUE,
    }
}
const initialState = '';

export default function reducer(state = initialState , action) {
    if(action.type === CONTENT_HANDLE_VALUE){
        return action.contentValue;
    }
    if(action.type === CONTENT_RESET_VALUE){
        return '';
    }
    return state;
}