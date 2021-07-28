import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, FormControl, InputGroup, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/bannerbackground.png';
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="180"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Link to="/login"><Navbar.Brand href="#home">Login</Navbar.Brand></Link>
                        <Link to="/login"><Button  variant="danger">Sing UP</Button></Link>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>


 <div className="header">
  <img className="banner" src={banner}/>
  <div className="centered"><h1>Best Food waiting for your belly</h1> <br/>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Food Item"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button className="mybutton" variant="danger" id="button-addon2">Search</Button>
  </InputGroup>
  </div>
</div>
</>
    );
};

export default Header;