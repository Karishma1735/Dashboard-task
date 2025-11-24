import { ADD_TASK, REMOVE_TASK, SELECTED_TASK } from "./actions/actiontypes";


const initialstate = {
  tasks:[],
  selectedTask:""
}

const taskreducer = (state=initialstate,action)=>{
    switch(action.type){
        case SELECTED_TASK:
            console.log("task selected")
            return{
                ...state,
                selectedTask:action.payload
            }
        case ADD_TASK:
            return {
                ...state, 
                tasks:[...state.tasks,action.payload]
            }

        case REMOVE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter((_,index)=>index!==action.payload)
            }
         default :
    return state;
    }
   
}

export default taskreducer;

