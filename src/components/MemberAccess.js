import {useEffect, useState} from 'react'

function MemberAccess(){

    const [currentUser, setCurrentUser] = useState(null);

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
                console.log({user})
                setCurrentUser(user);
            });
        }
    }

    useEffect( () => {
        fetchCurrentUser();
    }, []);

    const addTrip = () =>{
        debugger;
        console.log('adding trip');
        // /trip_books/:trip_book_id/trips
        // t.string "origin"
        // t.string "destination"
        // t.string "distance"
        // t.string "trip_co2"
        // t.integer "trip_book_id"
        
    }

        if(this.props.currentUser){
            return(
                <div>
                    <p>Add this trip to your 'Trips' to keep track of your carbon footprint.</p>
                    <button onClick={this.addTrip} >Add Trip</button>
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