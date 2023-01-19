import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
//import button from "react";
import { Link} from 'react-router-dom';
import Button from '@mui/material/Button';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    
    link: {
      color: 'white',
      paddingRight:"1rem"
    },
  }));
const TopMenu = () => {
     //const classes=StyledToolbar();
    return ( 
        <AppBar position='static'>
            <StyledToolbar>
            <Toolbar>
                <Typography variant='6' >
                    <Link to="/LandingPage"style={{padding: "10px", color:"white" }}>Home</Link>
                    <Link to="/product" style={{padding: "10px", color:"white"}}>Products</Link>
                    <Link to="/ContactUs" style={{padding: "10px", color:"white"}}>Contact</Link>
                    <Link to="/" style={{padding: "10px", color:"white"}}>Login</Link>
                    <Button variant='contained' >Sign Up</Button>
                </Typography>
            </Toolbar> 
            
            </StyledToolbar>
            
        </AppBar>
     );
}
 
export default TopMenu;