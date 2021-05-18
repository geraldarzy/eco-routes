import React from 'react';
import {connect} from 'react-redux';
import Comparisons from './Comparisons'

class CarbonFootprintLogic extends React.Component{
    constructor(){
        super();
        this.state={
            comparison:null
        }
    }
    calculateCarbonFootprint=(mpg=25,dist)=>{
        // dist is in meters, mpg is in miles
        // so first convers dist from meters to miles
        let dist_in_miles = (dist/1609.344)

        // dist_in_miles/mpg = gallons_used
        // 19.60 pounds of co2/gallon => gallons_used * 19.6 = pounds of co2
        let co2_produced = dist_in_miles/mpg *19.6;
        return co2_produced;
    }

    handleComparisonClick=(e)=>{
        this.setState( { comparison:e.target.id } );
    }

    render(){
        if(this.props.resp){
            //^^ if there is a response show the math 
            let dist = this.props.resp.routes[0].distance
            let co2_produced = this.calculateCarbonFootprint(25,dist)
            return(
                <div>
                    <div>
                        Here is the most eco-friendly route you can take for your trip. It emits {co2_produced.toFixed(2)} lbs of carbon-dioxide into the environment
                    </div>
                    <br/>
                    <button id='avgPerson' onClick={this.handleComparisonClick}>Avg Person</button>
                    <button id='pet' onClick={this.handleComparisonClick} >Pets</button>

                    <Comparisons tripCo2={co2_produced} compare={this.state.comparison}/>
                </div>
            )
        }
        return(
            <div>
                What's the size of your carbon foot print?
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        resp:state.resp
    }
}


export default connect(mapStateToProps)(CarbonFootprintLogic);