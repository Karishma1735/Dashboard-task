import todoreducer from './redux/reducer'
import { combineReducers } from 'redux';
import { createStore } from 'redux';


const rootReducer = combineReducers({
    todos:todoreducer
})

 const store = createStore(rootReducer)

 export default store