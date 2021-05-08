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

        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
          container: 'map-container',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-122.486052, 37.830348],
          zoom: 15
        });
        map.on('move', () => {
            let h = map.getCenter();
            console.log(h.lat.toFixed(4))
            this.setState({
              lng: map.getCenter().lng.toFixed(4),
              lat: map.getCenter().lat.toFixed(4),
              zoom: map.getZoom().toFixed(2)
            });
        });
    return (
        <div>
        Hello
        </div>
        )
    }
}

export default Map;