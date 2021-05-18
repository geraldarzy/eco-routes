import React from 'react';

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
                        compare w avgperson
                    </div>
                )
                
            case 'pet':
                return(
                    <div>
                        compare w pets
                    </div>
                )
            case 'america':
                return(
                    <div>
                        compare w america
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