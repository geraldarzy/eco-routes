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

    render(){
        const { lng, lat, zoom } = this.state;
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        // const map = new mapboxgl.Map({
        //   container: 'map-container',
        //   style: 'mapbox://styles/mapbox/streets-v11',
        //   center: [lng, lat],
        //   zoom: zoom
        // });
        // map.on('move', () => {
        //     let h = map.getCenter();
        //     console.log(h.lat.toFixed(4))
        //     this.setState({
        //       lng: map.getCenter().lng.toFixed(4),
        //       lat: map.getCenter().lat.toFixed(4),
        //       zoom: map.getZoom().toFixed(2)
        //     });
        // });


    const sayHi=()=>{
        console.log('hi from map component' + this.state.zoom)
    }

    return (
        <div>
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            {/* <button onClick={displayRoute}>h</button> */}
            <button onClick={this.props.sayHello}>sayHi</button>

        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        origin:state.origin,
        destination:state.destination
    }
}


export default connect(mapStateToProps)(Map);