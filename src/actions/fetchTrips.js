export function fetchTrips() {
    return (dispatch) => {
      fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(trips => dispatch({ type: 'FETCH_TRIPS', trips }));
    };
  } 