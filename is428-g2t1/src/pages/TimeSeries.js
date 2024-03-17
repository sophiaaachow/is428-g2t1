import Container from 'react-bootstrap/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderByYear from '../components/GenderByYear'

function TimeSeries() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg'>
                <h1 className='spotifyGreen p-2 text-center'>Time Series</h1>
                <hr />
                <GenderByYear />
            </Container>
            <Footer />
        </>
    );
}

export default TimeSeries;