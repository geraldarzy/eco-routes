function reducer(
    state={
        origin:'',
        destination:'',
        resp:null,
        currentUser:null,
        trips:[]
    }, action
) {
    switch (action.type){
        case 'SEND_RESPONSE':
            return{
                ...state,
                origin: state.origin,
                destination: state.destination,
                resp:action.resp,
                currentUser:state.user
            }
        case 'SET_CURRENT_USER':
            return{
                ...state,
                origin: state.origin,
                destination: state.destination,
                resp:state.resp,
                currentUser:action.user
            }
        case 'FETCH_TRIPS':
            return{
                ...state,
                origin: state.origin,
                destination: state.destination,
                resp:state.resp,
                currentUser:state.user,
                trips:action.trips
            }

        default:
            return state
        }
}

export default reducer;