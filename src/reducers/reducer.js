function reducer(
    state={
        oirigin:'',
        destination:'',
        resp:null
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

        default:
            return state
        }
}

export default reducer;