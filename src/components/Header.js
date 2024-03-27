import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import spotifyLogo from '../images/spotify_logo.png'
import githubLogo from '../images/github_logo.png'

function Header() {
  return (
        <Navbar expand='lg' className='navbar-dark bg-black px-3' sticky="top">
            <Navbar.Brand href="/" className='text-white'>
                <img src={spotifyLogo} width={30} className='me-2' alt='spotify_logo' />
                <b>The Next Big Hit</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/about" className='text-white'>About</Nav.Link>
                    <NavDropdown title={<span className="text-white">Charts</span>} data-bs-theme="dark">
                        <NavDropdown.Item href="/audio-features">Audio Features</NavDropdown.Item>
                        <NavDropdown.Item href="/artist-demographics">Artist Demographics</NavDropdown.Item>
                        <NavDropdown.Item href="/time-series">Time Series</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/results" className='text-white'>Results</Nav.Link>
                </Nav>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>View Repository</Tooltip>}>
                    <Nav.Link href="https://github.com/sophiaaachow/is428-g2t1" target='_blank' className='ms-auto'>
                        <img src={githubLogo} width={30} alt='github_logo' />
                    </Nav.Link>
                </OverlayTrigger>
            </Navbar.Collapse>
        </Navbar>
      );
    }

export default Header;