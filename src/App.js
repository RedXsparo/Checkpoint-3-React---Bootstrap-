import './App.css';
import {Navbar, Container , Nav , NavDropdown , Row , Col , Image, Button , Card  } from "react-bootstrap" ; 
import "bootstrap/dist/css/bootstrap.min.css" ; 
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image src="https://pbs.twimg.com/profile_images/1313161000602959872/EtO2HHEa_400x400.png" 
              fluid 
              rounded
              className=""
              />
            </Col>
            <Col sm={5}>
              <h1 class="taswira-weigh-light">Tagline</h1>
              <p class="mt-4">This is a Checkpoint Template for Gomycode Project </p>
              <Button variant="outline-primary">call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>This is some text within a card body.</Card.Body>

            </Card>
          </Row>
          <Row>
          <Col>
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://gomycodewebsite.blob.core.windows.net/website/img/lac_0_ea3cd658eb.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </Col>
           <Col>
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.ilboursa.com/handlers/image_news_get.ashx?id=C6CA431F-A437-4212-B92E-2A34FEEDD8AB" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </Col>
           <Col>
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.wearetech.africa/media/k2/items/cache/b0776ea0ff3c7ec4ba82e898c021ccc5_XL.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </Col>
           


          </Row>
        
      </Container>


      </main>
      <footer class="py-5 my-5 bg-dark">
        <Container classNmae="px-4">
          <p class="text-center  text-white"> Copyright &copy; Ahmed chraigui </p>
        </Container>
      
      </footer>
    </div>
  );
}

export default App;
