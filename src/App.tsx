import './App.css';
import { Navbar } from './components/navbar';
import { Route, Routes} from "react-router-dom";
import { UserListing } from './UserListing';
import { useAuth0 } from "@auth0/auth0-react";
//import {createBrowserHistory} from "history";
import { Welcome } from './components/Welcome';
import { BrowserRouter as Router} from "react-router-dom";
//const history = createBrowserHistory();

function App() {

  const {  error , isAuthenticated } = useAuth0();
  

    if (error) {
      return <div>Oops... {error.message}</div>;
    }

  return (

    <Router>
   
    <Navbar/>
        <Routes>
          <Route path="/" element={ isAuthenticated ? <UserListing/> : <Welcome/>} />
         
        </Routes>
    </Router>
  );
}

export default App;
