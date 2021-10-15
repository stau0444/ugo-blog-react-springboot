import { combineReducers } from 'redux';
import contents from './contents'
import contentTags from './contentTags';
import contentValue from './contentValue';
import contentList from './contentList';
import searchList from './searchList';

const mainReducer = combineReducers({
    contents,
    contentTags,
    contentValue,
    contentList,
    searchList
})

export default mainReducer;