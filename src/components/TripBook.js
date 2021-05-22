import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import Button from './Button'

function TripBook() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);
    const [trips, setTrips] = useState(null);

    let totalCo2 = 0;

    const fetchCurrentUser= async ()=>{
        // TODO: check if there'a token for the logged in user
        // GET /me
        const token = localStorage.getItem("token");
        if (token) {
           await fetch("http://localhost:3000/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((r) => r.json())
            .then((user) => {
                // set the user in state
                setCurrentUser(user);
            });
        }
    }

    useEffect( () => {
        fetchCurrentUser();
    }, []);

    
    if(currentUser){
        //if a user is logged in
        //get users tripbook
        fetch(`http://localhost:3000//trip_books/${currentUser.user.trip_book_id}`).then(resp=>resp.json()).then(response=>{
            if(response.message){
                return setError(response.message);
            }
            setTrips(response.tripbook_trips);

        })  
        const displayTrips=()=>{
           
            return trips.map((trip)=>{
                return (
                <li>
                    <div>
                        <p>Trip from {trip.origin} to {trip.destination}:</p>
                        <ul>
                            <li>Distance Traveled: {(parseFloat(trip.distance)/1609.344).toFixed(2)} miles</li>
                            <li>Carbon Footprint: {parseFloat(trip.trip_co2).toFixed(2)} lbs of CO2 emitted</li>
                        </ul>

                    </div>
                </li>
                )
            })
        }

        if(trips){
            return (
                <div>
                    <h3>Trips saved:</h3>
                    <ul>
                        {displayTrips()}
                    </ul>
                    <button onClick={()=>history.push('/map')}>Plan a trip</button>
                    <button onClick={()=>history.push('/')}>Home</button>
                </div>
            )
        }

        return(
            <div>
                {error}
                <button onClick={()=>history.push('/map')}>Plan a trip</button>
                <button onClick={()=>history.push('/')}>Home</button>
            </div>
        )
    }
    return(
        <div>
            To save and access trips, please sign up to continue
            <Button/>
            <button onClick={()=>{history.push('/map')}} >Go to map</button>
        </div>
    )
}

export default TripBook;