import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from '../actions/setCurrentUser';

class MemberAccess extends React.Component{

    componentDidMount(){
        // TODO: check if there'a token for the logged in user
        // GET /me
        const token = localStorage.getItem("token");
        if (token) {
           fetch("http://localhost:3000/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((r) => r.json())
            .then((user) => {
              // set the user in state
              console.log({user})
              this.props.setCurrentUser(user);
            });
        }
    }

    render(){
        if(this.props.currentUser){
            return(
                <div>
                    <p>Add this trip to your 'Trips' to keep track of your carbon footprint.</p>
                    <button>Add Trip</button>
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
}

const mapStateToProps=(state)=>{
    console.log({state})
    return{
        currentUser:state.currentUser,
        state:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setCurrentUser:(user)=>{
            dispatch(setCurrentUser(user))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MemberAccess);