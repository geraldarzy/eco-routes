import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function Button() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null);

    const fetchCurrentUser= ()=>{
        // TODO: check if there'a token for the logged in user
        // GET /me
        const token = localStorage.getItem("token");
        if (token) {
            fetch("https://rocky-reaches-47507.herokuapp.com/me", {
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

    useEffect( async () => {
        await fetchCurrentUser();
    }, []);

    if(!currentUser){
        return(
            <div>
                <button onClick={()=>{history.push('/user/sign-up')}}>Sign Up</button>
                <button onClick={()=>{history.push('/user/sign-in')}}>Log In</button>
            </div>
        )
    }

    return(null)
    
}

export default Button;