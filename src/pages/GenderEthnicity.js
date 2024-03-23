import Container from 'react-bootstrap/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderDistribution from '../components/GenderDistribution';

function GenderEthnicity() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg'>
                <h1 className='spotifyGreen p-2 text-center'>Gender & Ethnicity</h1>
                <hr />
                <GenderDistribution />
            </Container>
            <Footer />
        </>
    );
}

export default GenderEthnicity;