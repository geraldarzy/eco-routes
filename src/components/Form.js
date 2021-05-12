import React from 'react';


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
            <div>
                <label for='origin'>Origin:</label>
                <input onChange={this.props.handleInputChange} id='origin'type='text'></input>
                <br/>
                <label for='destination'>Destination:</label>
                <input onChange={this.props.handleInputChange} id='destination'type='text'></input>
                <br/>
            </div>
        )
    }
}

export default Form;
