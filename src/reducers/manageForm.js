function manageForm(
    state={
        oirigin:'',
        destination:''
    }, action
) {
    switch (action.type){
        case 'CHANGE_ORIGIN':
            return{
                ...state,
                origin: action.origin,
                destination: state.destination
            }
        case 'CHANGE_DESTINATION':
            return{
                ...state,
                origin: state.origin,
                destination: action.destination
            }

        default:
            return state
        }
}

export default manageForm;