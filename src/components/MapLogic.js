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
    handleInputChange=(e)=>{
        //handles input change dynamically by producing a new obj with target.id 
        //we can convert this to es6 with object.assign
        let stateObject = function() {
            let obj = {};
            obj[e.target.id] = e.target.value;
            return obj;
        }
        
        this.setState( stateObject );
    }

    render(){

        return(
            <div>
                <Form handleInputChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default MapLogic;