import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
import  { useState } from 'react';
import DailyTask from '../components/DailyTask'
import WeeklyTask from '../components/WeeklyTask';
import MonthlyTask from '../components/MonthlyTask';

function Home() {
  const [activetab , setactivetab] = useState("Daily")
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('https://i.ibb.co/zhR9h8jN/download-1.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
      }}
    >
          <Navbar setactivetab={setactivetab} activetab={activetab}/>

          {activetab==="Daily" && <DailyTask/>}
          {activetab==="Weekly" && <WeeklyTask/>}
          {activetab=="Monthly" && <MonthlyTask/>}

        {/* {props.} */}



     
    </Box>
  );
}

const mapStateToProps =(state)=>({
    activeTab:state.tabs.activetab
})

export default Home;
