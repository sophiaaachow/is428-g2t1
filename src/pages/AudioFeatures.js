import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from '../components/Header';
import Footer from '../components/Footer';
import KeyDistribution from '../components/AudioFeatures/KeyDistribution';
import ModeDistribution from '../components/AudioFeatures/ModeDistribution';
import AcousticnessDistribution from '../components/AudioFeatures/AcousticnessDistribution';
import DanceabilityDistribution from '../components/AudioFeatures/DanceabilityDistribution';

function AudioFeatures() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <h1 className='spotifyGreen p-2 pb-0'>Audio Features</h1>
                <p>This dashboard shows the audio feature information of all top 100 tracks on Spotify from 2000-2023.</p>
                <hr />
                <Row className='mb-3'>
                    <Col>
                        <KeyDistribution />
                    </Col>
                    <Col>
                        <ModeDistribution />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AcousticnessDistribution />
                    </Col>
                    <Col>
                        <DanceabilityDistribution />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default AudioFeatures;