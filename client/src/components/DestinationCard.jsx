import './DestinationCard.css'
import { Link } from 'react-router'


const DestinationCard = (props) =>  {

  const deleteDestination = async () => {
    if (!window.confirm(`Delete ${props.destination}? It will also be removed from any trips.`)) return

    await fetch('/api/destinations/' + props.id, { method: 'DELETE' })
    window.location.href = '/destinations'
  }

  return (
      <div className="DestinationCard" style={{ backgroundImage:`url(${props.img_url})`}} >
        <div className="card-info">
          <h2 className="destination">{props.destination}</h2>
          <p className="description">{props.description}</p>
         <Link to={'/destinations/add/'+ props.id}><button className="addToTripBtn">+ Add to Trip</button></Link>
         <button className="deleteDestinationBtn" onClick={deleteDestination}>Delete</button>
        </div>
      </div>
  );
};

export default DestinationCard;