import { createStore, combineReducers } from 'redux';
import topics from './reducer/topics';
import topic from './reducer/topic';

const reducer = combineReducers({
    topics,
    topic,
});

const store = createStore(reducer);

export default store;
