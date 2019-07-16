import React from 'react'
import Flexbox from 'flexbox-react'
import WeddingCard, { VenuesCard } from '../../components/card'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './style.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"




function MyNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Task List</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>)
}

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <p>
              "Marriage - an endless sleepover with your favorite weirdo"
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/marcelinaov">Marcelina Ortiz</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/ChristaHyde">Christa Hyde</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li> */}
              {/* <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          {/* &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

// export default FooterPage;


export default function LoggedOut() {

  return (<>
    <MyNavBar></MyNavBar>
    <Container>

      <Jumbotron>
        <h1>Welcome to Tie The Knot!</h1>
        <p>
          Don't have your own personal wedding planner?  Well look no further because Tie The Knot is here to take away your wedding planning blues!  Here you can search for the best local vendors and then manage the ones you want to go check out.
  </p>
        <p>
          {/* <Button variant="primary">Learn more</Button> */}
        </p>
      </Jumbotron>

      <Flexbox className="full-width" flexDirection="column"> { /* container */}
        <Flexbox> {/* first item */}
          <VenuesCard header="Wedding Venues" title="Choose Your Venue" />
        </Flexbox>
        <Flexbox> {/* second item */}
          <VenuesCard header="Cake Shops" title="Choose Your Venue" />
        </Flexbox>
        <Flexbox> {/* third item */}
          <VenuesCard header="Jewelery" title="Choose Your Venue" />
        </Flexbox>
        <Flexbox> {/* fourth item */}
          <VenuesCard header="Dress Shops" title="Choose Your Venue" />
        </Flexbox>
        <Flexbox> {/* fifth item */}
          <VenuesCard header="Floral Shops" title="Choose Your Venue" />
        </Flexbox>
        <Flexbox> {/* sixth item */}
          <VenuesCard header="Decoration Rentals" title="Choose Your Venue" />
        </Flexbox>
      </Flexbox>

      {/* I am not logged in */}
    </Container>
    <FooterPage></FooterPage>
  </>)

}