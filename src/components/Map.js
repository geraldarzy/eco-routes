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
    }

    render(){
        const { lng, lat, zoom } = this.state;
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        const map = new mapboxgl.Map({
          container: 'map-container',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
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


    //  ___________________________________________
    let url = 'https://api.mapbox.com/directions/v5/mapbox/driving/-73.8891016,40.7410592;-73.9896416,40.7410592?geometries=geojson&access_token=pk.eyJ1IjoiYXJ6eSIsImEiOiJja284d25iODAyNm1oMnJtYjVnZmllaG1zIn0.P8siHAbm84-8l4B0b723qg'
    fetch(url).then(resp=>resp.json()).then(json=>{

        let coordinates = json.routes[0].geometry.coordinates;
        // if(map.getSource){
        //         map.removeLayer('route');
        //         map.removeSource('route');
        //     }
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': coordinates
                    }
                }
            });
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#888',
                    'line-width': 8
                }
            });
        })
        
    //  ___________________________________________
    const flyTo=()=>{
        map.fitBounds([[lng,lat],[-63.9896416,40.7410592]])
    }
    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <button onClick={flyTo}>click me to fly</button>
        </div>
        )
    }
}

export default Map;