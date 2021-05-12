import React from 'react';
import Form from './Form'
import {connect} from 'react-redux';
import {sendResponse} from '../actions/sendResponse'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

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


    fetchDirections=()=>{
        let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${this.state.origin_coordinates[0]},${this.state.origin_coordinates[1]};${this.state.destination_coordinates[0]},${this.state.destination_coordinates[1]}?geometries=geojson&access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
        fetch(url).then(resp=>resp.json()).then(json=>{
            // let geojson_coordinates = json.routes[0].geometry.coordinates;
            //send this JSON to redux store
            this.props.sendResponse(json);
        })
    }

    handleSubmit= async ()=>{
        //turn location names into coordinates -done
          //___________origin_______________________________________
          let origin = this.state.origin.replace( / /g, '%20' );
          let originurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + origin + `.json?access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
          await fetch(originurl).then(resp=>resp.json()).then(json=>{
              this.setState({
                  origin_coordinates:json.features[0].center
              })
          })
  
          //___________destination___________________________________
          let destination = this.state.destination.replace( / /g, '%20' );
          let destinationurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + destination + `.json?access_token=`+process.env.REACT_APP_MAPBOX_TOKEN;
          await fetch(destinationurl).then(resp=>resp.json()).then(json=>{
              this.setState({
                  destination_coordinates:json.features[0].center
              })
          })


        //use coordinates to fetch directions -done
        //throw directions response into redux store -done in fetchDirection
        this.fetchDirections();
    }

    

    render(){

        return(
            <div className='center-items-inside'>
                <Form handleInputChange={this.handleInputChange}/>
                <Button variant='success' onClick={this.handleSubmit}>Submit</Button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendResponse:(resp)=>{
            dispatch(sendResponse(resp))
        }
    }
}

export default connect(null,mapDispatchToProps)(MapLogic);