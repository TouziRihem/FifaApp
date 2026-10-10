import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import PlayersList from './components/PlayersList';
import MatchesList from './components/MatchesList';

import './App.css';

import players from './data/players.json';
import matches from './data/matches.json';

function App() {
  return (
    <>

      {/* ============================
          NAVBAR
      ============================ */}

      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
      >

        <Container>

          <Navbar.Brand
            href="#home"
            className="fw-bold"
          >
            ⚽ FIFA App
          </Navbar.Brand>


          <Navbar.Toggle />


          <Navbar.Collapse>

            <Nav className="ms-auto">

              <Nav.Link href="#players">
                Players
              </Nav.Link>

              <Nav.Link href="#matches">
                Matches
              </Nav.Link>

              <Nav.Link href="#teams">
                Teams
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>


      {/* ============================
          HERO
      ============================ */}

      <section
        id="home"
        className="hero-section"
      >

        <Container>

          <div className="row align-items-center">

            <div className="col-lg-7">

              <p className="text-warning fw-bold mb-2">
                ⚽ FIFA ULTIMATE TEAM
              </p>

              <h1 className="display-4 fw-bold">
                Football starts
                <br />
                with the right team.
              </h1>

              <p className="lead text-light opacity-75">
                Explore players, check match results
                and discover teams from around the world.
              </p>

              <div className="mt-4">

                <Button
                  href="#players"
                  variant="warning"
                  className="me-2"
                >
                  Explore Players
                </Button>

                <Button
                  href="#matches"
                  variant="outline-light"
                >
                  Matches
                </Button>

              </div>

            </div>

          </div>

        </Container>

      </section>


      {/* ============================
          PLAYERS
      ============================ */}

      <section
        id="players"
        className="players-section"
      >

        <PlayersList players={players} />

      </section>


      {/* ============================
          MATCHES
      ============================ */}

      <section
        id="matches"
        className="matches-section"
      >

        <MatchesList matches={matches} />

      </section>


      {/* ============================
          TEAMS
      ============================ */}

      <section
        id="teams"
        className="teams-section"
      >

        <Container>

          <div className="section-title">

            <span>03</span>

            <div>
              <small>WORLD FOOTBALL</small>
              <h2>Teams</h2>
            </div>

          </div>


          <div className="d-flex flex-wrap gap-2">

            <Button variant="dark" className="rounded-pill">
              🇧🇷 Brazil
            </Button>

            <Button variant="dark" className="rounded-pill">
              🇦🇷 Argentina
            </Button>

            <Button variant="dark" className="rounded-pill">
              🇫🇷 France
            </Button>

            <Button variant="dark" className="rounded-pill">
              🇪🇸 Spain
            </Button>

            <Button variant="dark" className="rounded-pill">
              🏴 England
            </Button>

            <Button variant="dark" className="rounded-pill">
              🇩🇪 Germany
            </Button>

          </div>

        </Container>

      </section>


      {/* ============================
          FOOTER
      ============================ */}

      <footer className="bg-dark text-white py-4">

        <Container>

          <div className="d-flex justify-content-between align-items-center">

            <strong>
              ⚽ FIFA App
            </strong>

            <small className="text-secondary">
              © 2026 All Rights Reserved
            </small>

          </div>

        </Container>

      </footer>

    </>
  );
}

export default App;