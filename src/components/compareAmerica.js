import React from 'react';

class America extends React.Component{
    
    //america: 6558mil metric tons => 14.5trillion pounds /yr
    //14.5 trillion lbs / 365 = 3.973 * 10^10 => 39,730,000,000 lbs daily
    versusDailyAmerica = (tripCo2) =>{
        //americaDaily = 39,730,000,000 lbs per day
        let americaDaily = 39730000000;
        return(((tripCo2/americaDaily)*100))
    }

    render(){
        return(
            <div>
                Your trip is {this.versusDailyAmerica(this.props.tripCo2)}% of America's average daily carbon footprint.
            </div>
        )
    }
}

export default America;