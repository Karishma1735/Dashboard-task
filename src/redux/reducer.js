const initialstate = {
  tasks:[]
}

const taskreducer = (state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return {
                ...state, 
                tasks:[...state.tasks,action.payload]
            }

        case "REMOVE_TASK":
            return{
                ...state,
                tasks:state.tasks.filter((_,index)=>index!==action.payload)
            }
         default :
    return state;
    }
   
}

export default taskreducer;

