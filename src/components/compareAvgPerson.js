import React from 'react';

class AvgPerson extends React.Component{
    
    // avg human globably 4 tons /yr // avg human in USA 6 tons
    //global: 8000lbs/yr US: 12,000lbs/yr
    //globalDaily: 21.92 lbs | usDaily: 32.88 lbs
    versusDailyAvgPerson = (tripCo2) =>{
        //avgpersonDaily = 21.92 lbs
        let avgpersonDaily = 21.92;
        return(((tripCo2/avgpersonDaily)*100).toFixed(2))
    }
    
    versusDailyUSPerson = (tripCo2) =>{
        //uspersonDaily = 32.88 lbs
        let uspersonDaily = 32.88;
        return(((tripCo2/uspersonDaily)*100).toFixed(2))
    }


    render(){
        return(
            <div>
                Your trip is {this.versusDailyAvgPerson(this.props.tripCo2)}% of an average persons average daily carbon footprint and {this.versusDailyUSPerson(this.props.tripCo2)}% of an American persons average daily carbon footprint.
            </div>
        )
    }
}

export default AvgPerson;