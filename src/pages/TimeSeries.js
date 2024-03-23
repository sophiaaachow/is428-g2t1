import Container from 'react-bootstrap/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderByYear from '../components/TimeSeries/GenderByYear';

function TimeSeries() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <h1 className='spotifyGreen p-2 pb-0'>Time Series</h1>
                <p>This dashboard shows the track information of all top 100 tracks on Spotify from 2000-2023 over time.</p>
                <hr />
                <GenderByYear />
            </Container>
            <Footer />
        </>
    );
}

export default TimeSeries;