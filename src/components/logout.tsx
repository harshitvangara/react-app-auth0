import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";



export  function Logout() {
  let {logout} = useAuth0();
  const logoutWithRedirect = () =>logout({returnTo: window.location.origin });
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button color="inherit" onClick={() => logoutWithRedirect()} sx={{marginLeft:"1100px",textAlign:"end"}}>Logout</Button>
    </Box>
  );
}

