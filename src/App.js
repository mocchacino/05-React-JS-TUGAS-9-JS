import React, {Component} from "react"
import {
  Container,
  Col,
  Row,
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  Breadcrumb,
  Popover,
  PopoverContent,
  PopoverTitle,
  OverlayTrigger, 
  Form, 
  Pagination,
  Button,
  ProgressBar,
  Table,
  Tabs,
  Tab,
  Collapse,
  Spinner
} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      versi: false,
    }
  }

  render(){
    const munculPopover = <Popover>
      <PopoverTitle>Informasi Website</PopoverTitle>
        <PopoverContent>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
        </PopoverContent>
      </Popover>
    return(
      <Container fluid>
        <Navbar variant="dark" bg="dark">
          <Navbar.Brand>Akses Sport</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Berita</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Live Scores</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Piala & Liga">
                <NavDropdown.Item href="/">Liga Inggris</NavDropdown.Item>
                <NavDropdown.Item href="/">Liga Eropa</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Transfer Pemain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Tim</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl
              type="search"
              placeholde="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>

        <Row>
          <Col></Col>
          <Col md={5}>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col md={4}><h3>Rumor Transfer Pemain</h3></Col>
          <Col md={6}></Col>
          <Col>
            <Spinner animation="border" variant="success"/>
            <Spinner animation="grow" variant="success"/>
          </Col>
        </Row>

        <br/>

        <Tabs defaultActiveKey="">
          <Tab eventKey="all" title="Semua Transfer">
            <br/>
            <Table stripped bordered>
              <thead>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLANI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar now={85} label="75%"/></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar now={55} label="55%"/></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOPLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar now={95} label="95%"/></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT ST PETRSBURG</td>
                  <td><ProgressBar now={100} label="100%"/></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar now={50} label="50%"/></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar now={100} label="100%"/></td>
                </tr>
              </tbody>
            </Table>
          </Tab>

          <Tab eventKey="liga-inggris" title="Liga Premier Inggris">
            <p>Halaman Liga Premier Inggris</p>
          </Tab>

          <Tab eventKey="seri-a" title="Serie A">
            <p>Halaman Serie A</p>
          </Tab>

          <Tab eventKey="divisi-primera" title="Divisi Primera">
            <p>Halaman Divisi Primera</p>
          </Tab>

          <Tab eventKey="bundesliga" title="Bundesliga">
            <p>Halaman Bundesliga</p>
          </Tab>

          <Tab eventKey="liga-indo" title="Liga 1 Indonesia">
            <p>Halaman Liga 1 Indonesia</p>
          </Tab>

          <Pagination size="sm">
          <Pagination.First/>
          <Pagination.Prev/>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis/>

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Ellipsis/>

          <Pagination.Next/>
          <Pagination.Last/>
          </Pagination>
        </Tabs>

        <br/>

        <Row>
          <Col md="auto">
            <OverlayTrigger 
              trigger="click"
              placement="right" 
              overlay={munculPopover}
            >
              <Button variant="primary">Informasi</Button>
            </OverlayTrigger>
          </Col>

          <Col>
            <Button 
              variant="primary"
              onClick={() => this.setState({versi: !this.state.versi})}
            >
              Versi Website
            </Button>
            <Collapse in={this.state.versi}>
              <p>Akses Sport V1.0</p>
            </Collapse>
          </Col>
        </Row>
        

        
      </Container>
    )
  }
}

export default App;
