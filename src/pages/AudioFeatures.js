import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TypeAnimation } from 'react-type-animation';

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
import tableauLogo from '../images/tableauLogo.png'

function AudioFeatures() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <TypeAnimation
                    sequence={[
                        'Audio Features',
                    ]}
                    wrapper='h1'
                    speed={50}
                    className='spotifyGreen p-2 pb-0'
                />
                <p>Audio feature information of all top 100 tracks on Spotify from 2000-2023.</p>
                <p><a href='/' className='spotifyGreen'><img src={tableauLogo} width={50} alt='tableauLogo' />View our Tableau Dashboard</a></p>
                <hr />
                <Row className='mt-5'>
                    <Col className='mb-5'>
                        <KeyDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <ModeDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <AcousticnessDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <DanceabilityDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <EnergyDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <InstrumentalnessDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <LivenessDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <SpeechinessDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <TempoDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <ValenceDistribution />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default AudioFeatures;