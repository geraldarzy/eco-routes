import React from 'react';

class Pet extends React.Component{

    //pets dogs:770kg /yr cats 310kg /yr
    // dogs: 1697.56 lbs / yr || cats: 683.43 lbs per year
    // dogsDaily: 4.65 | catsDaily: 1.87lbs daily

    versusDailyDog = (tripCo2) =>{
        //dogsDaily: 4.65lbs per day
        let dogsDaily = 4.65;
        return(((tripCo2/dogsDaily)*100).toFixed(2))
    }

    versusDailyCat = (tripCo2) =>{
        //catsDaily: 1.87lbs per day
        let catsDaily = 1.87;
        return(((tripCo2/catsDaily)*100).toFixed(2))
    }

    render(){
        return(
            <div>
                Your trip is {this.versusDailyDog(this.props.tripCo2)}% of a dogs average daily carbon footprint and {this.versusDailyCat(this.props.tripCo2)}% of a cats average daily carbon footprint.
            </div>
        )
    }
}

export default Pet;