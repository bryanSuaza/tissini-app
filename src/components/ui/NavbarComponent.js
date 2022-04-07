import React, { Fragment, useContext } from 'react';
import {Container, Navbar} from 'react-bootstrap';
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import queryString from "query-string";
import { AuthContext } from '../../auth/authContext';
import { types } from "../../types/types";

const NavbarComponent = () => {

  const { search } = useLocation();
  const { id } = queryString.parse(search);

  const {user, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () =>{

    const action = {
      type: types.logout
    };
    dispatch(action);

    navigate('./autentication',{
      replace:true
    })
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" text="dark">
        <Container>
          <Link className="navbar-brand text-dark" to="/">
            <img
              src="../../assets/logo.jpg"
              className="rounded-circle"
              height="50"
              alt="TissiniApp"
            />{" "}
            Tissini app
          </Link>

          <NavLink
            className={({ isActive }) =>"nav-item nav-link" + (isActive ? "avtive" : "")}
            to={`/carrito?id=${id}`}
          >
            Carrito
          </NavLink>

          <NavLink
            className={({ isActive }) =>"nav-item nav-link" + (isActive ? "avtive" : "")}
            to={`/home?id=${id}`}
          >
            Home
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a
                className="text-decoration-none text-secondary"
                href="https://tissini.com/"
              >
                <img
                  src="../../assets/internet.png"
                  className="rounded-circle"
                  height="40"
                  alt="TissiniApp"
                />{" "}
                Visita nuestra pagina web 
              </a>
            </Navbar.Text>

                <span className="nav-item nav-link text-success">{user.name}</span>
            
                <button
                  type="button"
                  className="nav-item nav-link btn"
                  onClick={handleLogout}
                >
                  Salir
                </button>
              
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
