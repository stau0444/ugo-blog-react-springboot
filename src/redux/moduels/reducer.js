import { combineReducers } from 'redux';
import contents from './contents'
import contentTags from './contentTags';
import contentValue from './contentValue';

const mainReducer = combineReducers({
    contents,
    contentTags,
    contentValue
})

export default mainReducer;