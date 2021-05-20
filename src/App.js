
import './App.css';
import Map from './components/Map'
import MapLogic from './components/MapLogic';
import CarbonFootprintLogic from './components/CarbonFootprintLogic';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route, useHistory} from 'react-router-dom';

function App() {

  const history = useHistory();

  return (
    
    <div className="App App-header ">
      <Switch>
        <Route exact path='/trial'>
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
          <div className='center-items-inside'>
            <div >Welcome to Eco-Routes</div>
            <br/>
            <button id='foot-button' onClick={()=>{
              history.push('/trial')
            }} style={{background:'none',border:'none'}} ><img src='http://www.clker.com/cliparts/c/u/4/9/j/S/green-footprint-hi.png' style={{height:'auto',width:'50px'}}/>
            </button>
            <br/>
            <label for='foot-button'>Start Now</label>
            <br/>
            <br/>
            <button onClick={()=>{history.push('/user/sign-up')}}>Sign Up</button>
            <button onClick={()=>{history.push('/user/sign-in')}}>Log In</button>
            
          </div>
        </Route>
        <Route exact path='/user/sign-up'>
            <div>
              sign up here
            </div>
        </Route>

        <Route exact path='/user/sign-in'>
            <div>
              sign in here
            </div>
        </Route>
      </Switch>
    </div>
  );
}
// http://localhost:3000/origin-destination/-73;8891016/40;7410592/-73;9896416/40;7410592
export default App;
