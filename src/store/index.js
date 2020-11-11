import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import list from "./reducer/list";

const reducer = combineReducers({
    list
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
