import taskreducer from './redux/reducer'
import { combineReducers } from 'redux';
import { createStore } from 'redux';


const rootReducer = combineReducers({
    tasksData:taskreducer
})

 const store = createStore(rootReducer)

 export default store