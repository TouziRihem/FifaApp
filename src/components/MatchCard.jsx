import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function MatchCard({
  team1,
  team2,
  logo1,
  logo2,
  score1,
  score2,
  date,
  time,
  status,
}) {
  return (
    <Card className="match-card">

      <Card.Body>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <small className="text-muted fw-bold">
            MATCH
          </small>

          <Badge
            bg={status === 'FINISHED' ? 'secondary' : 'warning'}
            text={status === 'FINISHED' ? 'light' : 'dark'}
          >
            {status}
          </Badge>

        </div>


        <div className="match-teams">

          {/* Team 1 */}
          <div>
            <img
              src={logo1}
              alt={team1}
              className="match-logo"
            />

            <h6 className="mt-2">
              {team1}
            </h6>
          </div>


          {/* Score */}
          <div className="match-score">
            {score1}
            <span>-</span>
            {score2}
          </div>


          {/* Team 2 */}
          <div>
            <img
              src={logo2}
              alt={team2}
              className="match-logo"
            />

            <h6 className="mt-2">
              {team2}
            </h6>
          </div>

        </div>


        <hr />

        <div className="row text-center">

          <div className="col">
            <small className="text-muted d-block">
              DATE
            </small>

            <strong>
              {date}
            </strong>
          </div>

          <div className="col">
            <small className="text-muted d-block">
              TIME
            </small>

            <strong>
              {time}
            </strong>
          </div>

        </div>

      </Card.Body>

    </Card>
  );
}

export default MatchCard;