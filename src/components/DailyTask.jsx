import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function DailyTask() {
  const [tasks, setTasks] = useState('Study');

  const handleChange = (event) => {
    setTasks(event.target.value);
  };

  return (
    <Box sx={{ width: 200, margin:'0 auto', paddingTop: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="task-select-label">Select Task</InputLabel>
        <Select
          labelId="task-select-label"
          id="task-select"
          value={tasks}
          label="Select Task"
          onChange={handleChange}
        >
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Exercise">Exercise</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Relax">Relax</MenuItem>
        </Select>
      </FormControl>
      
    </Box>
  );
}

export default DailyTask;
