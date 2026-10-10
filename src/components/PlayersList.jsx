import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerCard from './PlayerCard';

function PlayersList({ players }) {
  return (
    <Container>

      <div className="section-title">
        <span>01</span>
        <div>
          <small>FIFA ULTIMATE TEAM</small>
          <h2>Players</h2>
        </div>
      </div>

      <Row className="g-4">

        {players.map((player) => (
          <Col
            key={player.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <PlayerCard {...player} />
          </Col>
        ))}

      </Row>

    </Container>
  );
}

export default PlayersList;