import Container from 'react-bootstrap/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import KeyDistribution from '../components/KeyDistribution';

function AudioFeatures() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg'>
                <h1 className='spotifyGreen p-2 text-center'>Audio Features</h1>
                <hr />
                <KeyDistribution />
            </Container>
            <Footer />
        </>
    );
}

export default AudioFeatures;