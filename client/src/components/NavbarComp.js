import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Router, Route, Routes, Link } from "react-router-dom";
import './Navbar.css';
import Home from './Home';
import About from "./About";
import Matches from "./Matches";
import Genres from "./Genres";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Logout from "./Logout";


function NavbarComp() {
    return (
      <div>
            <Navbar
            style={{backgroundColor: "#529F8C", color: "#F6C6BF" }}
            expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="home"><img class="lg" src="https://i.imgur.com/Y0jNRJ1.png" width="225px" height="70px" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
                    <Nav.Link as={Link} to="/genres">Genres</Nav.Link>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="Register">Register</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="Login">Login</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="Logout">Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="About">
                        About
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/matches" element={<Matches/>} />
                <Route path="/genres" element={<Genres/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
    )
}

export default NavbarComp