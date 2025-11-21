import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
import { connect } from 'react-redux';
import  { useState } from 'react';
import DailyTask from '../components/DailyTask'

function Home() {
  const [tab , activetab] = useState("Daily-Tasks")
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
          <Navbar/>

          {tab==="Daily-Tasks" && <DailyTask/>}

        {/* {props.} */}



     
    </Box>
  );
}

const mapStateToProps =(state)=>({
    activeTab:state.tabs.activetab
})

export default Home;
