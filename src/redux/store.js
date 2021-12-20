import { createStore, combineReducers} from "redux";
import homeReducer from "./reducers/homeReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    home: homeReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
