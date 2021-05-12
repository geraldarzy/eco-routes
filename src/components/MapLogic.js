import React from 'react';
import Form from './components/Form'

class MapLogic extends React.Component{

    constructor(){
        super();
        this.state={
            origin: '',
            destination: ''
        }
    }


    render(){

        return(
            <div>
                <Form/>
            </div>
        )
    }
}

export default MapLogic;