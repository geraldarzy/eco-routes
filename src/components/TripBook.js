import {useEffect, useState} from 'react'

function TripBook() {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);
    const [trips, setTrips] = useState(null);

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
        fetch(`http://localhost:3000//trip_books/${currentUser.trip_book_id}`).then(resp=>resp.json()).then(response=>{
            if(response.message){
                return setError(response.message);
            }
            setTrips(response.tripbook_trips);

        })  


        return (
            <div>

            </div>
        )
    }
    return(
        <div>
            not logged in
        </div>
    )
}

export default TripBook;