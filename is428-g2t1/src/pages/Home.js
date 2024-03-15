import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { TypeAnimation } from 'react-type-animation';

import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../images/spotify_logo.png'

function Home() {
  return (
      <>
        <Header />
        <Container fluid className='mainBg text-center'>
          <Row style={{paddingTop: '20vh'}}>
            <Col className='mb-5'>
              <img src={logo} width={300} alt='spotify_logo' />
              <h1 className='display-1'>
                <b>The Next Big Hit</b>
              </h1>
              <TypeAnimation
                sequence={[
                  'Understanding Success on Spotify',
                ]}
                wrapper='h3'
                speed={50}
                className='spotifyGreen'
              />
            </Col>
            <Col className='d-flex justify-content-center mb-5'>
                <div style={{width: '500px'}}>
                  <h4>This project aims to unravel the complexities behind chart-toppers on Spotify, shedding light on the multifaceted dynamics driving music trends in the digital age we live in today.</h4>
                  <hr className='my-5' />
                  <h4>View Our Dashboards</h4>
                  <div className="d-grid gap-3 mt-4">
                    <Button variant="dark" size="lg" href='/audio-features'>
                      Audio Features
                    </Button>
                    <Button variant="success" size="lg" href='/gender-and-ethnicity'>
                      Gender & Ethnicity
                    </Button>
                    <Button variant="dark" size="lg" href='/time-series'>
                      Time Series
                    </Button>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
  );
}

export default Home;
