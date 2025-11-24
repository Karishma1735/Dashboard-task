import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { connect } from 'react-redux';

function WeeklyTask({tasks,addtask,removetask}){

  const [selected , setSelected] = useState("")

  const weeklytasklist = ["Party" , "Exercise" , "Outing" , "Morning Walk"]

  const handleAdd = ()=>{
    if(!setSelected) return
    addtask(selected)
    console.log("task added successfuly")
    setSelected("")
  }
  return (
    <Box sx={{ width: 200, margin:'0 auto', paddingTop: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="task-select-label">Weekly Task</InputLabel>
        <Select
          labelId="task-select-label"
          id="task-select"
          value={selected}  
          label="Select Task"
          onChange={(e)=>setSelected(e.target.value)}
        >
         
          {weeklytasklist.map((task,index)=>(
          <MenuItem key={index} value={task}>{task}</MenuItem> 
          ))}
        </Select>
        <Button onClick={handleAdd}>Add</Button>
      </FormControl>

     <List>
      {tasks.map((tasks,index)=>(
        <ListItem key={index}>
          <ListItemText sx={{
    bgcolor:"#DE5D83",
   
   }}>{tasks}</ListItemText>
          <Button onClick={()=>removetask(index)}>Remove</Button>
        </ListItem>
       
      ))}

     </List>
      
    </Box>
  );
}

const mapStateToProps =(state)=>({
  tasks:state.tasksData.tasks
})

const mapDispatchToProps = (dispatch) =>({
  addtask:(value)=>dispatch({type:"ADD_TASK",payload:value}),
  removetask:(index)=>dispatch({type:"REMOVE_TASK",payload:index})
})

export default connect(mapStateToProps,mapDispatchToProps)(WeeklyTask)



