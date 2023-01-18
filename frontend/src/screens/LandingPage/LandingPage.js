import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  /* useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
      
    if (userInfo) {
      history.push('/myNotes');
    }
  }, [history]); */

  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='intro-text'>
            <div>
              <h1 className='title'>Welcome to PR's Note</h1>
              <p className='subtitle'>Safe your notes.</p>
            </div>
            <div className='buttonContainer'>
              <Link to='/login'>
                <Button size='lg' className='landingbutton'>
                  Login
                </Button>
              </Link>
              <Link to='/register'>
                <Button
                  variant='outline-primary'
                  size='lg'
                  className='landingbutton'
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
