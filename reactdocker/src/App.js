
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listcategories from './components/Listcategories';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar bg="primary" variant="dark">
              <Nav.Link as={Link} to="/Listcategories">liste des categories</Nav.Link>
        </Navbar>
        <Routes>
          <Route path="/Listcategories" element={<Listcategories />} />
          <Route path="/logIn" element={<LogIn/>} />
          <Route path="/signIn" element={<SignIn/>} />

        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
