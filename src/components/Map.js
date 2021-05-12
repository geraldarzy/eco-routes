import React from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import {connect} from 'react-redux'

class Map extends React.Component{
    constructor(props){
        super();
        this.state = {
            lng: -73.879321,
            lat: 40.73645,
            zoom: 10
          };
    }

    
    componentDidMount(){
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        const { lng, lat, zoom } = this.state;
        this.map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        this.map.on('move', () => {
              this.setState({
                lng: this.map.getCenter().lng.toFixed(4),
                lat: this.map.getCenter().lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)
              });
        });
      
    }
    render(){

        
    return (
        <div id='map-container' class='map-container'>

        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        resp:state.resp
    }
}


export default connect(mapStateToProps)(Map);