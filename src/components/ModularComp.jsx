import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { connect } from 'react-redux';

function ModularComp({tasks,addtask,removetask,selectedTask,setSelectedTask}){

  const tasklist = ["Study" , "Exercise" , "Skincare" , "Haircare"]

  const handleAdd = ()=>{
    if(!selectedTask) return alert("Please select the task")
    addtask(selectedTask)
    console.log("task added successfuly")
    setSelectedTask("")
  }
  return (
    <Box sx={{ width:'50%', margin:'0 auto',padding:'20px'}}>
      <FormControl fullWidth>
        <InputLabel id="task-select-label">Select Task</InputLabel>
        <Select
          labelId="task-select-label"
          id="task-select"
          value={selectedTask}  
          label="Select Task"
          onChange={(e)=>setSelectedTask(e.target.value)}
        >
         
          {tasklist.map((task,index)=>(
          <MenuItem key={index} value={task}>{task}</MenuItem> 
          ))}
        </Select>
        <Button onClick={handleAdd} sx={{bgcolor:'BLACK', color:"white", padding:"10px",marginTop:"20px"}}>Add</Button>
      </FormControl>
   <Box >
     <List>
      {tasks.map((tasks,index)=>(
        <ListItem key={index}  sx={{
    bgcolor:"#DE5D83",
    width:"100%"
   
   }}>
          <ListItemText sx={{
            color:"white"
          }}>{tasks}</ListItemText>
          <Button onClick={()=>removetask(index)} sx={{
            
          }}>Remove</Button>
        </ListItem>
       
      ))}
     </List>
     </Box>
      
    </Box>
  );
}

const mapStateToProps =(state)=>({
  tasks:state.tasksData.tasks,
  selectedTask:state.tasksData.selectedTask
})

const mapDispatchToProps = (dispatch) =>({
  addtask:(value)=>dispatch({type:"ADD_TASK",payload:value}),
  removetask:(index)=>dispatch({type:"REMOVE_TASK",payload:index}),
  setSelectedTask:(value)=>dispatch({type:"SELECTED_TASK",payload:value})
})

export default connect(mapStateToProps,mapDispatchToProps)(ModularComp)



