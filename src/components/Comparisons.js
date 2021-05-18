import React from 'react';
import AvgPerson from './compareAvgPerson'
import Pet from './comparePet'
import America from './compareAmerica'

class Comparisons extends React.Component{

    //america: 6558mil metric tons/14.5trillion pounds /yr
    //pets dogs:770kg /yr cats 310kg /yr
    // avg human globably 4 tons /yr

    render(){
        console.log('compariosn props')
        console.log(this.props)
        switch(this.props.compare){

            case 'avgPerson':
                return(
                    <div>
                        <AvgPerson tripCo2={this.props.tripCo2}/>
                    </div>
                )
                
            case 'pet':
                return(
                    <div>
                        <Pet tripCo2={this.props.tripCo2}/>
                    </div>
                )
            case 'america':
                return(
                    <div>
                        <America tripCo2={this.props.tripCo2}/>
                    </div>
                )

            default:
                return(
                    <div>
                        <h6>Compare your carbon footprint with ...</h6>
                    </div>
                )
        }
    }
}

export default Comparisons