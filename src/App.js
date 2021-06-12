import logo from './logo.svg';
import './App.css';
import {Navbar, Form, FormControl, Button,Nav } from  'react-bootstrap' ;

function App() {
  return (
    <div className="App">
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1> THIS IS MY FIRST APP WITH REACT</h1>
        <h2>I did not take off the SVG because i like it</h2>
       <br/>
       <Button href="https://www.codewars.com/users/Omsf" target="_blank">Go to my CodeWars Profile</Button>
 
      </header>
    </div>
  );
}

export default App;
