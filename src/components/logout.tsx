import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
export  function Logout() {
  let {user,logout,} = useAuth0();
  const logoutWithRedirect = () =>logout({returnTo: window.location.origin });
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button color="inherit" onClick={() => logoutWithRedirect()} sx={{marginLeft:"1100px",textAlign:"end"}}>Logout</Button>
    </Box>
  );
}

