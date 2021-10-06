import { createStore } from "redux";
import mainReducer from './moduels/reducer';


const store = createStore(
    mainReducer
)

export default store;