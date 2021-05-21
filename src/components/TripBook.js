import {useEffect, useState} from 'react'

function TripBook() {
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

    
    if(currentUser){
        debugger;
        //if a user is logged in
        //get users tripbook
        


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