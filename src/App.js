import React from 'react'
import Routes from './Routes';
import 'bootswatch/dist/morph/bootstrap.min.css'
import { Navbar,  Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       
        <Navbar bg="dark" variant="dark" fixed="top" >
          <Container>
            <Navbar.Brand href="#home">Motivational Calendar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="http://localhost:1234/calendar">Calendar</Nav.Link>
              <Nav.Link href="http://localhost:1234/quotes">Quotes</Nav.Link>
              <Nav.Link href="http://localhost:1234/addquote">Add Quote</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes />
        <br />
    
    </div>
  );
}


export default App;