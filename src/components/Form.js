import React from 'react';
import AsyncSelect from 'react-select/async';
import 'bootstrap/dist/css/bootstrap.min.css'

class Form extends React.Component{
    constructor(props){
        super();
       
    }
    render(){
        return (
            <div className="center-items-inside">
                <AsyncSelect
                    loadOptions={this.props.loadOptions} 
                    placeholder='Origin' 
                    defaultOptions={false} 
                    onChange={this.props.handleOriginInputChange}
                />

                <AsyncSelect
                    loadOptions={this.props.loadOptions} 
                    placeholder='Destination' 
                    defaultOptions={false} 
                    onChange={this.props.handleDestinationInputChange}
                />
            </div>
        )
    }
}

export default Form;
