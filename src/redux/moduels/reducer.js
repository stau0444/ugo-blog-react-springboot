import { combineReducers } from 'redux';
import contents from './contents'
import contentTags from './contentTags';
import contentValue from './contentValue';
import contentList from './contentList';


const mainReducer = combineReducers({
    contents,
    contentTags,
    contentValue,
    contentList
})

export default mainReducer;