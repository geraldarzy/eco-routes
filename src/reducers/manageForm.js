function manageForm(
    state={
        oirigin:'',
        destination:'',
        resp:{}
    }, action
) {
    switch (action.type){
        case 'CHANGE_ORIGIN':
            return{
                ...state,
                origin: action.origin,
                destination: state.destination,
                resp:state.resp
            }
        case 'CHANGE_DESTINATION':
            return{
                ...state,
                origin: state.origin,
                destination: action.destination,
                resp:state.resp
            }
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

export default manageForm;