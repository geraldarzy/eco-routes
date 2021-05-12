import React from 'react';
import {connect} from 'react-redux';

class CarbonFootprintLogic extends React.Component{

}

const mapStateToProps=(state)=>{
    return{
        resp:state.resp
    }
}


export default connect(mapStateToProps)(CarbonFootprintLogic);