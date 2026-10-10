import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MatchCard from './MatchCard';

function MatchesList({ matches }) {
  return (
    <Container>

      <div className="section-title">
        <span>02</span>

        <div>
          <small>FIXTURES & RESULTS</small>
          <h2>Matches</h2>
        </div>
      </div>


      <Row className="g-4">

        {matches.map((match) => (
          <Col
            key={match.id}
            xs={12}
            lg={6}
          >
            <MatchCard {...match} />
          </Col>
        ))}

      </Row>

    </Container>
  );
}

export default MatchesList;