import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'
class Form extends React.Component{
    constructor(props){
        super();
       
    }

    
    render(){
        return (
            <div>
                <input onChange={this.props.handleInputChange} id='origin'type='text' placeholder='Origin'></input>
                <br/>
                <input onChange={this.props.handleInputChange} id='destination'type='text' placeholder='Destination'></input>
                <br/>
            </div>
        )
    }
}

export default Form;
