import React from 'react';

class America extends React.Component{
    
    //america: 6558mil metric tons => 14.5trillion pounds /yr
    //14.5 trillion lbs / 365 = 3.973 * 10^10 => 39,730,000,000 lbs daily

    render(){
        return(
            <div>
                {this.props.tripCo2.toFixed(2)}lbs vs. 39,730,000,000lbs of co2 emitted by America Daily
            </div>
        )
    }
}

export default America;