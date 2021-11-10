const HANDLE_THEME = "ugo-blog/HANDLE_THEME";


export function handleTheme() {
    return {
        type:HANDLE_THEME,
    }
}

const initialState = false;

export default function reducer(state = initialState , action) {
    
    if(action.type === HANDLE_THEME){
        return state  ? false : true
    }
    
    return state;
}