import { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

import Modal from "./Modal";

export default function NavMenu() {
  let [show, SetShow] = useState<boolean>(false);
  let [search, SetSearch] = useState<string>(``);

  function handleClose() {
    SetShow(true);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="mx-5 d-lg-flex align-items-center justify-content-center navbar-expand-lg">
          <Navbar.Brand href="/">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1rem"
                height="2.1rem"
                fill="currentColor"
                className="bi bi-x-circle mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
              Feminicidio
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="me-4"
            style={{ right: 0, position: "fixed" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse>
            <Nav className="d-flex flex-row align-items-center justify-content-center">
              <Nav.Link className="px-1" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="px-1" href="/contato">
                Contato
              </Nav.Link>
              <Nav.Link className="px-1" href="/sobre">
                Sobre
              </Nav.Link>
            </Nav>

            <div className="d-flex ms-2" role="search">
              {/*
                              <Form className="d-flex flex-row">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(event) => {
                    SetSearch(event.target.value);
                  }}
                />
                <Button onClick={handleClose}>Pesquisar</Button>
              </Form>
              */}
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {show == true && search != `` ? (
        <Modal changeState={SetShow} search={search}></Modal>
      ) : (
        <></>
      )}
    </>
  );

  /*
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
  */
}
