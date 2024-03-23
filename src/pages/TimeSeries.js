import Container from 'react-bootstrap/Container';
import { TypeAnimation } from 'react-type-animation';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenderByYear from '../components/TimeSeries/GenderByYear';
import tableauLogo from '../images/tableauLogo.png'

function TimeSeries() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg text-center'>
                <TypeAnimation
                    sequence={[
                        'Time Series',
                    ]}
                    wrapper='h1'
                    speed={50}
                    className='spotifyGreen p-2 pb-0'
                />
                <p>Track information of all top 100 tracks on Spotify from 2000-2023 over time.</p>
                <p><a href='/' className='spotifyGreen'><img src={tableauLogo} width={50} alt='tableauLogo' />View our Tableau Dashboard</a></p>
                <hr />
                <div className='mt-5'>
                    <GenderByYear />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default TimeSeries;