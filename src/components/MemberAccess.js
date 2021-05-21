import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

function MemberAccess(){

    const [currentUser, setCurrentUser] = useState(null);

    const directionsResponse = useSelector(state=>state.resp);
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

    const calculateCarbonFootprint=(mpg=25,dist)=>{
        // dist is in meters, mpg is in miles
        // so first convers dist from meters to miles
        let dist_in_miles = (dist/1609.344)

        // dist_in_miles/mpg = gallons_used
        // 19.60 pounds of co2/gallon => gallons_used * 19.6 = pounds of co2
        let co2_produced = dist_in_miles/mpg *19.6;
        return co2_produced;
    }

    useEffect( () => {
        fetchCurrentUser();
    }, []);

    
    if(currentUser){

       

        const addTrip = () =>{
            // t.string "origin"
            // t.string "destination"
            // t.string "distance"
            // t.string "trip_co2"
            // t.integer "trip_book_id"
            fetch(`http://localhost:3000//trip_books/${currentUser.trip_book_id}/trips`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ trip_book_id: currentUser.trip_book_id, origin: directionsResponse.waypoints[0].name, destination: directionsResponse.waypoints[1].name, distance: directionsResponse.routes[0].distance, trip_co2: calculateCarbonFootprint(25,directionsResponse.routes[0].distance)}),
                })
            .then(resp=>resp.json()).then(response=>{
                //do something after adding trip
            })
         }

            return(
                <div>
                    <p>Add this trip to your 'Trips' to keep track of your carbon footprint.</p>
                    <button onClick={addTrip} >Add Trip</button>
                </div>
            )
    }
        return (
            <div>
                <p>Want to keep track of your carbon footprint? Sign In Now!</p>
                <button>Sign In</button>
            </div>
        )
}





export default MemberAccess;