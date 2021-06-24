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
    
    loadOptions=(inputValue,callback)=>{
        let matches = [];
        let urlText = inputValue.replace( / /g, '%20' );
        let url =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + urlText + `.json?access_token=`+'pk.eyJ1IjoiYXJ6eSIsImEiOiJja29nMHpvMmQwbmh4Mm5wd3FmZHo1cWg0In0.cfrKpHwNtWsOx224hRN25A';
        fetch(url).then(resp=>resp.json()).then(json=>{
            if(json.features){
                matches = json.features.map(x=>{
                    // console.log(x.center)
                    return {label:`${x.place_name}`, value:x.center}
                });
                callback(matches);
            }
        });
    }

    handleOriginInputChange=(e)=>{
        this.setState( {origin:e.label} );
        this.setState( {origin_coordinates:e.value} );
    }
    handleDestinationInputChange=(e)=>{
        this.setState( {destination:e.label} );
        this.setState( {destination_coordinates:e.value} );
    }

    fetchDirections=()=>{
        //fetching mapbox directions so we need to use the key that is stored in backend
        //get "/origin-destination/:start_long/:start_lat/:end_long/:end_lat"
        let url = 'https://rocky-reaches-47507.herokuapp.com/origin-destination/' + this.state.origin_coordinates[0].toString().replace('.',';') + '/' + this.state.origin_coordinates[1].toString().replace('.',';') + '/' + this.state.destination_coordinates[0].toString().replace('.',';') + '/' + this.state.destination_coordinates[1].toString().replace('.',';')
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
          //this key is restricted on mapbox website, the key that should be hidden is the key that can fetch directions
          let originurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + origin + `.json?access_token=`+'pk.eyJ1IjoiYXJ6eSIsImEiOiJja29nMHpvMmQwbmh4Mm5wd3FmZHo1cWg0In0.cfrKpHwNtWsOx224hRN25A';
          await fetch(originurl).then(resp=>resp.json()).then(json=>{
              this.setState({
                  origin_coordinates:json.features[0].center
              })
          })
  
          //___________destination___________________________________
          let destination = this.state.destination.replace( / /g, '%20' );
          //this key is restricted on mapbox website, the key that should be hidden is the key that can fetch directions
          let destinationurl =`https://api.mapbox.com/geocoding/v5/mapbox.places/` + destination + `.json?access_token=`+'pk.eyJ1IjoiYXJ6eSIsImEiOiJja29nMHpvMmQwbmh4Mm5wd3FmZHo1cWg0In0.cfrKpHwNtWsOx224hRN25A';
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
                <Form handleOriginInputChange={this.handleOriginInputChange} handleDestinationInputChange={this.handleDestinationInputChange} loadOptions={this.loadOptions} originSuggestions={this.state.originSuggestions} destinationSuggestions={this.state.destinationSuggestions}/>
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