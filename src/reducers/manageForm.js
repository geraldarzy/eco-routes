function manageForm(
    state={
        oirigin:'',
        destination:'',
        resp:{}
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

export default manageForm;