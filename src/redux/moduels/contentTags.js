const CONTENT_HANDEL_TAG = "ugo-blog/contentTags/CONTENT_HANDEL_TAG"
const RESET_CONTENT_TAG ="ugo-blog/contentTags/RESET_CONTENT_TAG"
const REMOVE_CONTENT_TAG ="ugo-blog/contentTags/REMOVE_CONTENT_TAG"


export function addTag(contentTags) {
    return {
        type:CONTENT_HANDEL_TAG,
        contentTags:contentTags
    }
}
export function removeTag(tagName) {
    return {
        type:REMOVE_CONTENT_TAG,
        tagName,
    }
}

export function resetContentTags() {
    return {
        type:RESET_CONTENT_TAG,
    }
}
const initialState = [];

export default function reducer(state = initialState , action) {
    
    if(action.type === CONTENT_HANDEL_TAG){
        return [...action.contentTags ];
    }
    if(action.type === RESET_CONTENT_TAG){
        return [];
    }
    if(action.type === REMOVE_CONTENT_TAG){
        return state.filter((tag)=>tag.tagName !== action.tagName);
    }
    return state;
}