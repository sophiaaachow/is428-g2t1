import Container from "react-bootstrap/esm/Container";

function Error() {
  return (
    <Container fluid className="mainBg parentContainer text-center">
      <Container className="childContainer">
        <h1 className="display-1">
          <b>404</b>
        </h1>
        <h5>Page Not Found</h5>
        <p className="mt-4">Return to <a href="/" className="spotifyGreen">Home</a></p>
      </Container>
    </Container>
      );
    }

export default Error;