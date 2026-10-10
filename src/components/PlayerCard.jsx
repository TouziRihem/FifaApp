import Card from 'react-bootstrap/Card';

function PlayerCard({
  name,
  team,
  nationality,
  flag,
  age,
  rating,
  position,
  image,
  stats,
}) {
  return (
    <Card className="fifa-card h-100">

      {/* Rating + Position + Flag */}
      <div className="fifa-card-header">

        <div>
          <div className="player-rating">
            {rating}
          </div>

          <div className="player-position">
            {position}
          </div>
        </div>

        <img
          src={flag}
          alt={nationality}
          className="player-flag"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

      </div>


      {/* Player image */}
      <div className="player-image-container">

        <img
          src={image}
          alt={name}
          className="player-image"
        />

      </div>


      {/* Player information */}
      <Card.Body className="fifa-card-body">

        <h5 className="player-name">
          {name}
        </h5>

        <div className="player-info">
          {nationality} &nbsp;•&nbsp; {age} years
        </div>


        {/* Statistics */}
        <div className="player-stats">

          <div>
            <strong>{stats.pac}</strong>
            <small>PAC</small>
          </div>

          <div>
            <strong>{stats.sho}</strong>
            <small>SHO</small>
          </div>

          <div>
            <strong>{stats.pas}</strong>
            <small>PAS</small>
          </div>

          <div>
            <strong>{stats.dri}</strong>
            <small>DRI</small>
          </div>

          <div>
            <strong>{stats.def}</strong>
            <small>DEF</small>
          </div>

          <div>
            <strong>{stats.phy}</strong>
            <small>PHY</small>
          </div>

        </div>


        <div className="player-team">
          {team}
        </div>

      </Card.Body>

    </Card>
  );
}

export default PlayerCard;