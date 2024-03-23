import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderDistribution from '../components/GenderEthnicity/GenderDistribution';
import EthnicityDistribution from '../components/GenderEthnicity/EthnicityDistribution';

function GenderEthnicity() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <h1 className='spotifyGreen p-2 pb-0'>Gender & Ethnicity</h1>
                <p>This dashboard shows the artist information of all top 100 tracks on Spotify from 2000-2023.</p>
                <hr />
                <Row className='mt-5'>
                    <Col>
                        <GenderDistribution />
                    </Col>
                    <Col>
                        <EthnicityDistribution />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default GenderEthnicity;