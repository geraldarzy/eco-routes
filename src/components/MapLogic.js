import React from 'react';
import Form from './Form'

class MapLogic extends React.Component{

    constructor(){
        super();
        this.state={
            origin: '',
            destination: '',
            origin_coordinates:'',
            destination_coordinates:''
        }
    }
    handleInputChange=(e)=>{
        //handles input change dynamically by producing a new obj with target.id 
        //we can convert this to es6 with object.assign
        let stateObject = function() {
            let obj = {};
            obj[e.target.id] = e.target.value;
            return obj;
        }
        
        this.setState( stateObject );
    }

    locationToCoordinates = () =>{
        //turn spaces into '%20' as per API URL 

         //___________origin_______________________________________
        let origin = this.state.origin.replace( / /g, '%20' );
        let originurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + origin + `.json?access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
        fetch(originurl).then(resp=>resp.json()).then(json=>{
            console.log(json.features[0].center);
            this.props.changeOrigin(json.features[0].center)
        })

        //___________destination___________________________________
        let destination = this.state.destination.replace( / /g, '%20' );
        let destinationurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + destination + `.json?access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
        fetch(destinationurl).then(resp=>resp.json()).then(json=>{
            console.log(json.features[0].center);
            this.props.changeDestination(json.features[0].center)
        })
    }

    handleSubmit=()=>{
        //turn location names into coordinates
        //use coordinates to fetch directions
        //throw directions response into redux store
    }

    

    render(){

        return(
            <div>
                <Form handleInputChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default MapLogic;