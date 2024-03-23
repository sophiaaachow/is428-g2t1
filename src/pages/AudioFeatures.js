import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from '../components/Header';
import Footer from '../components/Footer';
import KeyDistribution from '../components/AudioFeatures/KeyDistribution';
import ModeDistribution from '../components/AudioFeatures/ModeDistribution';
import AcousticnessDistribution from '../components/AudioFeatures/AcousticnessDistribution';
import DanceabilityDistribution from '../components/AudioFeatures/DanceabilityDistribution';
import EnergyDistribution from '../components/AudioFeatures/EnergyDistribution';
import InstrumentalnessDistribution from '../components/AudioFeatures/InstrumentalnessDistribution';
import LivenessDistribution from '../components/AudioFeatures/LivenessDistribution';
import SpeechinessDistribution from '../components/AudioFeatures/SpeechinessDistribution';
import TempoDistribution from '../components/AudioFeatures/Tempo';
import ValenceDistribution from '../components/AudioFeatures/ValenceDistribution';

function AudioFeatures() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <h1 className='spotifyGreen p-2 pb-0'>Audio Features</h1>
                <p>This dashboard shows the audio feature information of all top 100 tracks on Spotify from 2000-2023.</p>
                <hr />
                <Row className='my-5'>
                    <Col>
                        <KeyDistribution />
                    </Col>
                    <Col>
                        <ModeDistribution />
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <AcousticnessDistribution />
                    </Col>
                    <Col>
                        <DanceabilityDistribution />
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <EnergyDistribution />
                    </Col>
                    <Col>
                        <InstrumentalnessDistribution />
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <LivenessDistribution />
                    </Col>
                    <Col>
                        <SpeechinessDistribution />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TempoDistribution />
                    </Col>
                    <Col>
                        <ValenceDistribution />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default AudioFeatures;