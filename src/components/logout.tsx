import { useAuth0 } from "@auth0/auth0-react";
import {  Group, Menu, UnstyledButton, createStyles} from "@mantine/core";
import { useState } from "react";
const useStyles = createStyles((theme) => ({
    user: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      transition: 'background-color 100ms ease'
}}))

  
export const  Logout = () => {
    const { classes, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    let {user,logout,} = useAuth0();
    const logoutWithRedirect = () =>logout({returnTo: window.location.origin });
  
    return(
        <div>
        <Menu
        width={76}
        position="bottom-end"
        // transition="pop-top-right"
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
      >
        <Menu.Target>
          <UnstyledButton
            className={cx(classes.user)}
          >
            <Group spacing={5} text-align="end">
                {user.name} 
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => logoutWithRedirect()} sx={{textAlign:"end"}}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      </div>
    )
};