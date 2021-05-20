function reducer(
    state={
        origin:'',
        destination:'',
        resp:null,
        currentUser:null
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

        default:
            return state
        }
}

export default reducer;