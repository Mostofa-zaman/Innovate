import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./menu.css";
import { IoChevronDownOutline } from "react-icons/io5";
import NavLogo from "../../assets/navLogo.png";
import CommonButton from "../commonButton/CommonButtom";

const Menu = () => {
  return (
    <Navbar expand="lg" className=" navMain">
      <div className="navOverlayParent">
        <div className="navOne"></div>
        <div className="navTwo"></div>
      </div>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={NavLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navElement">
            <Nav.Link href="#home">
              Home <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#about">
              About <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#service">
              Service <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#pages">
              Pages <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#news">
              News <IoChevronDownOutline />
            </Nav.Link>
          </Nav>
          <div className="navButton">
            <CommonButton buttonName={"Login "} className={"navButtonOne"} />
            <CommonButton
              buttonName={"Free Consultation"}
              className={"navButtonTwo"}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
