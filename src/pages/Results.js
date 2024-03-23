import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie'

import Header from '../components/Header';
import Footer from '../components/Footer';
import ourSong from '../images/ourSong.mp3'
import speakerAnimation from '../images/speakerAnimation.json'

function Results() {
    return (
        <>
            <Header />
            <Container fluid className='mainBg'>
                <TypeAnimation
                    sequence={[
                        'Results',
                    ]}
                    wrapper='h1'
                    speed={50}
                    className='spotifyGreen p-2 pb-0 text-center'
                />
                <p className='text-center'>Deriving consumers' tastes in top songs this millennium.</p>
                <hr />
                <Row className='p-5'>
                    <Col>
                        <h3 className='spotifyGreen mb-4'>What do consumers look for in songs?</h3>
                        <p><strong>Most Top Songs:</strong></p>
                        <ul>
                            <li>Are written in <strong className='spotifyGreen'>C# (or Db)</strong>.</li>
                            <li>Are written in <strong className='spotifyGreen'>major</strong> mode.</li>
                            <li>Tend to <strong className='spotifyGreen'>not be acoustic</strong>.</li>
                            <li>Have relatively <strong className='spotifyGreen'>high danceability</strong>.</li>
                            <li>Have relatively <strong className='spotifyGreen'>high energy</strong>.</li>
                            <li>Contain <strong className='spotifyGreen'>more vocals</strong>.</li>
                            <li>Are <strong className='spotifyGreen'>not recorded with a live audience</strong>.</li>
                            <li>Contain <strong className='spotifyGreen'>no spoken words</strong>.</li>
                            <li>Have a tempo of around <strong className='spotifyGreen'>120-140 beats per minute</strong>.</li>
                            <li>Convey <strong className='spotifyGreen'>either positive or negative moods</strong>.</li>
                        </ul>
                        <p><strong>Try to Avoid:</strong></p>
                        <ul>
                            <li>Writing songs in <strong className='spotifyGreen'>D# (or Eb)</strong>.</li>
                            <li>Producing <strong className='spotifyGreen'>acoustic</strong> songs.</li>
                            <li>Producing songs with<strong className='spotifyGreen'>low danceability</strong>.</li>
                            <li>Producing songs with <strong className='spotifyGreen'>low energy</strong>.</li>
                            <li>Prioritising <strong className='spotifyGreen'>instruments</strong> over vocals.</li>
                            <li>Recording with a <strong className='spotifyGreen'>live audience</strong>.</li>
                            <li>Including <strong className='spotifyGreen'>spoken words</strong> in your songs.</li>
                            <li>Producing songs that are <strong className='spotifyGreen'>too slow or fast</strong>.</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 className='spotifyGreen mb-4'>What demographics do top songs' artists belong to?</h3>
                        <ul>
                            <li>Artists that produce top songs tend do be <strong className='spotifyGreen'>male</strong>.</li>
                            <li>Artists who are <strong className='spotifyGreen'>white</strong> also see more success in producing top songs.</li>
                        </ul>
                        <h3 className='spotifyGreen mt-5 mb-4'>How has consumers' tastes changed over time?</h3>
                        <ul>
                            <li>Consumers are starting to appreciate <strong className='spotifyGreen'>acoustic</strong> songs. Otherwise, preferences in audio features have <strong className='spotifyGreen'>remained relatively constant</strong>.</li>
                            <li><strong className='spotifyGreen'>Female</strong> artists are gradually producing more top songs, although they are still beat by their male counterparts.</li>
                            <li>Interest in groups has diminished, while <strong className='spotifyGreen'>solo artists</strong> are finding more success.</li>
                            <li>Consumers' tastes are becoming <strong className='spotifyGreen'>more diverse</strong>, with increasing interest in <strong className='spotifyGreen'>hispanic</strong> and <strong className='spotifyGreen'>asian</strong> artists. <strong className='spotifyGreen'>Black</strong> artists are seeing a slow decline in popularity. Nevertheless, white artists still make up the majority.</li>
                        </ul>
                    </Col>
                    <Col className='text-center'>
                        <h3 className='spotifyGreen'>We created a song using our results!</h3>
                        <p className='mb-4'>Do you think it will make it to the Spotify's Top 100?</p>
                        <div className='d-flex justify-content-center'>
                            <audio controls>
                                <source src={ourSong} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        <Lottie 
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: speakerAnimation,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                },
                                speed: '0.5' 
                            }}
                            height={500}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Results;