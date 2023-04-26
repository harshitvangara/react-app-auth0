/* eslint-disable jsx-a11y/anchor-is-valid */
import {  Header,Group,Button,Box,} from '@mantine/core';
import { Logout } from './logout';
import { useAuth0 } from "@auth0/auth0-react";
  
  export function Navbar() {
    const {isAuthenticated, loginWithRedirect} = useAuth0();
  
    return (
     
        <Header height={60} px="md">
          <Group position="apart" sx={{ height: '100%' }}>
            <Box></Box>
            <Group>
              {!isAuthenticated && <Button onClick={() => loginWithRedirect({})} variant="default">Log in</Button>}

              {isAuthenticated && <Logout/> }
            </Group>
  
          
          </Group>
        </Header>
      
    );
  }