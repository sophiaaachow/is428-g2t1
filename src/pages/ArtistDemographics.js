import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TypeAnimation } from 'react-type-animation';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderDistribution from '../components/ArtistDemographics/GenderDistribution';
import EthnicityDistribution from '../components/ArtistDemographics/EthnicityDistribution';
import tableauLogo from '../images/tableauLogo.png'
import NationalityDistribution from '../components/ArtistDemographics/NationalityDistribution';

function ArtistDemographics() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <TypeAnimation
                    sequence={[
                        'Artist Demographics',
                    ]}
                    wrapper='h1'
                    speed={50}
                    className='spotifyGreen p-2 pb-0'
                />
                <p>Artist information of all top 100 tracks on Spotify from 2000-2023.</p>
                <p><a href='/' className='spotifyGreen'><img src={tableauLogo} width={50} alt='tableauLogo' />View our Tableau Dashboard</a></p>
                <hr />
                <Row className='mt-5'>
                    <Col className='mb-5'>
                        <GenderDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <EthnicityDistribution />
                    </Col>
                    <Col className='mb-5'>
                        <NationalityDistribution />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default ArtistDemographics;