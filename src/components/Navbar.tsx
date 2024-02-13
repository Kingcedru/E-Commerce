import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 36 36">
            <path fill="#ccd6dd" d="M31 22H11L9 10h24z" />
            <path
              fill="#66757f"
              d="M32.984 27h-22C9.89 27 9 26.109 9 25.016S9.906 23 11 23l.007-.001l.008.001H31a1 1 0 0 0 .986-.836l2-12A.997.997 0 0 0 33 9H9.817l-1.04-6.166a.988.988 0 0 0-.942-.814C7.819 2.017 7.808 2 7.792 2H3a1 1 0 0 0 0 2h3.946l2.903 17.216c-1.642.493-2.849 2-2.849 3.8A3.989 3.989 0 0 0 10.984 29h22a1 1 0 1 0 0-2M30.82 17h-3.307l.273-2h3.366zm-5.326 0H22v-2h3.767zM20 17h-3.494l-.273-2H20zm-5.512 0h-3.307l-.333-2h3.367zm-2.641 4l-.333-2h3.247l.273 2zm5.206 0l-.273-2H20v2zM22 21v-2h3.22l-.273 2zm4.967 0l.273-2h3.247l-.333 2zm4.852-10l-.333 2H28.06l.273-2zm-5.505 0l-.273 2H22v-2zM20 11v2h-4.041l-.273-2zm-6.333 0l.273 2h-3.427l-.333-2z"
            />
            <circle cx="14" cy="31" r="3" fill="#e1e8ed" />
            <path
              fill="#292f33"
              d="M14 35c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4m0-6c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2"
            />
            <circle cx="28" cy="31" r="3" fill="#e1e8ed" />
            <path
              fill="#292f33"
              d="M28 35c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4m0-6c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2"
            />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}>
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
