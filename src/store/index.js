import { createStore } from 'redux';
import reducer from '../reducers';

// passing reducers to store
const store = createStore(reducer);

export default store;