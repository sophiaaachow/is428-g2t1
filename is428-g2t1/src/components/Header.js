import spotifyLogo from '../images/spotify_logo.png'
import githubLogo from '../images/github_logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
        <Navbar expand='lg' className='navbar-dark bg-black px-3'>
            <Navbar.Brand href="/" className='text-white'>
                <img src={spotifyLogo} width={30} className='me-2' alt='spotify_logo' />
                <b>The Next Big Hit</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/" className='text-white'>Dashboard 1</Nav.Link>
                    <Nav.Link href="/" className='text-white'>Dashboard 2</Nav.Link>
                    <Nav.Link href="/" className='text-white'>Dashboard 3</Nav.Link>
                </Nav>
                <Nav.Link href="https://github.com/sophiaaachow/is428-g2t1" target='_blank' className='ms-auto'>
                    <img src={githubLogo} width={30} alt='github_logo' />
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
      );
    }

export default Header;