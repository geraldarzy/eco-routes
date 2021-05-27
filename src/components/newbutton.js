import React from 'react';
import {connect} from 'react-redux';
import {fetchTrips} from '../actions/fetchTrips';
class NewButton extends React.Component{


    render(){

        const displayTrips=()=>{

            return this.props.trips.map(trip=>{
                return(
                    <li>{trip.origin}</li>
                )
            })
        }

        const getTrips=()=>{
            this.props.fetchTrips()
        }
        return(
            <>
                <button onClick={getTrips}>Get All Trips</button>
                <ul>
                    {displayTrips()}
                </ul>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        trips:state.trips
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchTrips:()=>{
            dispatch(fetchTrips())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewButton);