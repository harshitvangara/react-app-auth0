import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});
const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  width:"510px",
  marginLeft:"330px",
  borderRadius: 4,
});

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  width:"150px",
  marginTop:"50px",
  marginLeft:"500px",
  borderRadius: theme.shape.borderRadius,
}));

export  function Welcome() {
  return (<>
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Welcome to my App</MyThemeComponent>
    </ThemeProvider>
     <MyComponent>A web application that allows users to create and manage a list of tasks</MyComponent>
     </>
  );
}