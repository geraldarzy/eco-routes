import React from 'react';
import {connect} from 'react-redux';

class CarbonFootprintLogic extends React.Component{
    calculateCarbonFootprint=(mpg=25,dist)=>{
        // dist is in meters, mpg is in miles
        // so first convers dist from meters to miles
        let dist_in_miles = (dist/1609.344)

        // dist_in_miles/mpg = gallons_used
        // 19.60 pounds of co2/gallon => gallons_used * 19.6 = pounds of co2
        let co2_produced = dist_in_miles/mpg *19.6;
        return co2_produced;
    }

    render(){
        if(this.props.resp){
            let dist = this.props.resp.routes[0].distance
            let co2_produced = this.calculateCarbonFootprint(25,dist)
            console.log(co2_produced+' lbs of co2 produced')
        }
        return(
            <div>
                
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