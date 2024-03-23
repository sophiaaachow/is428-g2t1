import Container from 'react-bootstrap/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderDistribution from '../components/GenderEthnicity/GenderDistribution';

function GenderEthnicity() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <h1 className='spotifyGreen p-2 pb-0'>Gender & Ethnicity</h1>
                <p>This dashboard shows the artist information of all top 100 tracks on Spotify from 2000-2023.</p>
                <hr />
                <GenderDistribution />
            </Container>
            <Footer />
        </>
    );
}

export default GenderEthnicity;