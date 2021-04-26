import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

//components
import Links from './Links'

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="position-navbar">
      <div className="position-menu">
        <Navbar.Brand href="/">S.O.S. Pet</Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="ml-auto justify-content-end show-md">
          <Links />
        </Nav>
      </div>
      <div className="hidden-md">
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav>
            <Links />
          </Nav>
        </Navbar.Collapse>
      </div>
      <Nav className="margin-search justify-content-end">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" className="search-button">Search</Button>
        </Form>
      </Nav>
    </Navbar>



    // <Navbar bg="light" expand="lg" className="position-navbar">
    //   <div className="position-menu">
    //     <Navbar.Brand href="/">S.O.S. Pet</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto justify-content-end">
    //         <Links />
    //       </Nav>
    //     </Navbar.Collapse>
    //   </div>
    //   <Nav className="ml-auto justify-content-end">
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Nav>
    // </Navbar>
  );
}
