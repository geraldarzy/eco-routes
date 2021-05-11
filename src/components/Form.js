import React from 'react';

class Form extends React.Component{
    constructor(props){
        super();
    }

    render(){

        return (
            <form>
                <label for='origin'>Origin:</label>
                <input id='origin'type='text'></input>
                <br/>
                <label for='destination'>Destination:</label>
                <input id='destination'type='text'></input>
            </form>
        )
    }
}

export default Form;
