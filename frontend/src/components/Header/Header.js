import {
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
  Container
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <Navbar collapseOnSelect bg='primary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>PR-Note</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='m-auto'>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='/mynotes'>My Notes</Link>
            </Nav.Link>
            <NavDropdown title='PR' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem('userInfo');
                  history.push('/');
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
