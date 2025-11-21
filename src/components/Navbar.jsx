import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';

export default function Navbar() {


const [open , setOpen] = useState(false)
const [task,setTask] = useState(null)
const handleclick = () => {
  if (!open) {
    setOpen(true);
    console.log("open");
  } else {
    setOpen(false);
    console.log("close");
  }
};


const handletask = (task) =>{
    setTask(task)
}

  return (
    <Box color="black" >
      <AppBar position="static" sx={{ bgcolor: '#E5989B' }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="#111184"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon  onClick={handleclick}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>



        <Drawer anchor="left" open={open} onClose={handleclick}>
        <Box sx={{ width: 250 }} role="presentation">
          <List sx={{
            text:"bold"
          }}>
             <ListItem disablePadding sx={{ borderBottom: '1px solid grey' }}>
          <ListItemButton onClick={() => handletask("Daily Task")}>
            <ListItemText primary="Daily Task" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ borderBottom: '1px solid grey' }}>
          <ListItemButton onClick={() => console.log("Weekly Task")}>
            <ListItemText primary="Weekly Task" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ borderBottom: '1px grey' }}>
          <ListItemButton onClick={() => console.log("Monthly Task")}>
            <ListItemText primary="Monthly Task" />
          </ListItemButton>
        </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>

  );
}
