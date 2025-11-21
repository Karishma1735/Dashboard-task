// import setActiveTab from "../actions/actiontypes";
import {SET_ACTIVE_TAB} from '../actions/actiontypes'

const initialstate = {
    activetab:"Daily-tasks"
}

const todoreducer = (state=initialstate,action)=>{
    switch(action.type){
        case SET_ACTIVE_TAB:
            return {...state, activetab:action.payload}

         default :
    return state
    }
   
}

export default todoreducer;