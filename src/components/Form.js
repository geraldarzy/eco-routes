import React from 'react';

class Form extends React.Component{
    constructor(props){
        super();
        this.state={
            origin:'',
            destination:''
        }
    }

    handleChange = (e) =>{
        //handles input change dynamically by producing a new obj with target.id 
        //we can conver this to es6 with object.assign
        let stateObject = function() {
            let obj = {};
            obj[e.target.id] = e.target.value;
            return obj;
        }
        
        this.setState( stateObject );
    }
    render(){
        return (
            <form>
                <label for='origin'>Origin:</label>
                <input onChange={this.handleChange} id='origin'type='text'></input>
                <br/>
                <label for='destination'>Destination:</label>
                <input onChange={this.handleChange} id='destination'type='text'></input>
            </form>
        )
    }
}

export default Form;
