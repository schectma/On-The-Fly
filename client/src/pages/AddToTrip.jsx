import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import AddTripOptionCard from '../components/AddTripOptionCard';


const AddToTrip = (props) => {

    const [trips, setTrips] = useState([]);
    const [destination, setDestination] = useState(null);
    const {destination_id} = useParams();


    useEffect(() => {
        setTrips(props.data);
    }, [props]);

    useEffect(() => {
        const fetchDestination = async () => {
            const response = await fetch('/api/destinations/' + destination_id)
            const data = await response.json()
            setDestination(data)
        }

        fetchDestination();
    }, [destination_id]);

    return (
        <div className="AddToTrip">
            {destination && <center><h3>Choose a trip to add {destination.destination} to</h3></center>}
            {
                trips && trips.length > 0 ?
                trips.map((trip,index) =>
                   <AddTripOptionCard key={trip.id}
                         id={trip.id}
                         title={trip.title}
                         description={trip.description}
                         img_url={trip.img_url}  />
                ) : <h3 className="noResults">{'No Trips Yet 😞'}</h3>
            }
        </div>
    )
}

export default AddToTrip;