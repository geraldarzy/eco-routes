import {useState, useEffect} from 'react';
import './App.css';
import Map from './components/Map'
import MapLogic from './components/MapLogic';
import CarbonFootprintLogic from './components/CarbonFootPrintLogic';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route, useHistory} from 'react-router-dom';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import TripBook from './components/TripBook'
import Button from './components/Button'
import NewButton from './components/newbutton'

function App() {
  const history = useHistory();

  return (
    
    <div className="App App-header ">
      <Switch>
        <Route exact path='/trips'>
          <TripBook/>
        </Route>
        <Route exact path='/map'>
            <Card className='center-items-inside' style={{width:'35rem', height:'80vh',margin:'1rem'}}>
              <Card.Body>

                <Card>
                  <Card.Body>
                    < MapLogic/>             
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <CarbonFootprintLogic/>
                  </Card.Body>
                </Card>
                
              </Card.Body>
            </Card>

            <Card className='center-items-inside' style={{width:'55rem', height:'80vh', margin:'1rem'}}>
              <Card.Body className='center-items-inside'>
                <Map/>
              </Card.Body>
            </Card>
        </Route>
        <Route exact path='/'>
          <div className='center-items-inside'  style={{color:'white'}}>
            <div >Welcome to Eco-Routes</div>
            <br/>
            <button id='foot-button' onClick={()=>{
              history.push('/map')
            }} style={{background:'none',border:'none'}} ><img src='http://www.clker.com/cliparts/c/u/4/9/j/S/green-footprint-hi.png' style={{height:'auto',width:'50px'}}/>
            </button>
            <br/>
            <label for='foot-button'>Start Now</label>
            <br/>
            <br/>
            <Button/>
            
          </div>
        </Route>
        <Route exact path='/user/sign-up'>
            <div>
              <UserSignUp history={history}/>
            </div>
        </Route>

        <Route exact path='/user/sign-in'>
            <div>
              <UserSignIn history={history}/>
            </div>
        </Route>
        <Route exact path='/showtrips'>
            <NewButton/>
        </Route>
      </Switch>
    </div>
  );
}
// http://localhost:3000/origin-destination/-73;8891016/40;7410592/-73;9896416/40;7410592
export default App;
