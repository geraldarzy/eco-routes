import React from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

class Map extends React.Component{
    constructor(props){
        super();
        this.state = {
            lng: -73.9896416,
            lat: 40.7410592,
            zoom: 12
          };
          this.mapContainer = React.createRef();
    }

    render(){
    return (
        <div>
        Hello
        </div>
        )
    }
}

export default Map;