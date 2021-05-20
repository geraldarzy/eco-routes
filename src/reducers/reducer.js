function reducer(
    state={
        oirigin:'',
        destination:'',
        resp:null,
        current_user:null
    }, action
) {
    switch (action.type){
        case 'SEND_RESPONSE':
            return{
                ...state,
                origin: state.origin,
                destination: state.destination,
                resp:action.resp
            }
        case 'SET_CURRENT_USER':
            return{
                ...state,
                origin: state.origin,
                destination: state.destination,
                resp:state.resp,
                current_user:action.user
            }

        default:
            return state
        }
}

export default reducer;