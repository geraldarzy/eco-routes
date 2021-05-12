import React from 'react';
import {connect} from 'react-redux'
import {changeOrigin} from '../actions/changeOrigin';
import {changeDestination} from '../actions/changeDestination';

class Form extends React.Component{
    constructor(props){
        super();
       
    }

    // handleChange = (e) =>{
    //     //handles input change dynamically by producing a new obj with target.id 
    //     //we can conver this to es6 with object.assign
    //     let stateObject = function() {
    //         let obj = {};
    //         obj[e.target.id] = e.target.value;
    //         return obj;
    //     }
        
    //     this.setState( stateObject );
    // }

    // handleSubmit = (e) =>{
    //     e.preventDefault();
    //     //call API to turn names into coordinates
    //     console.log(`The Origin is ${this.state.origin} and the destination is ${this.state.destination}`)
    //     //___________origin_______________________________________
    //     let origin = this.state.origin.replace( / /g, '%20' );
    //     let originurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + origin + `.json?access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
    //     fetch(originurl).then(resp=>resp.json()).then(json=>{
    //         console.log(json.features[0].center);
    //         this.props.changeOrigin(json.features[0].center)
    //     })
    //     //___________destination___________________________________
    //     let destination = this.state.destination.replace( / /g, '%20' );
    //     let destinationurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + destination + `.json?access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
    //     fetch(destinationurl).then(resp=>resp.json()).then(json=>{
    //         console.log(json.features[0].center);
    //         this.props.changeDestination(json.features[0].center)
    //     })
    // }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label for='origin'>Origin:</label>
                <input onChange={this.handleChange} id='origin'type='text'></input>
                <br/>
                <label for='destination'>Destination:</label>
                <input onChange={this.handleChange} id='destination'type='text'></input>
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        origin:state.origin,
        destination:state.destination
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        changeOrigin:(origin)=>{
            dispatch(changeOrigin(origin))
        },
        changeDestination:(destination)=>{
            dispatch(changeDestination(destination))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
