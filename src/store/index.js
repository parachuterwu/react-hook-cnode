import { createStore, combineReducers } from 'redux';
import topics from './reducer/topics';

const reducer = combineReducers({
    topics,
});

const store = createStore(reducer);

export default store;
