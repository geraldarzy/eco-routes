
import './App.css';
import Map from './components/Map'
import MapLogic from './components/MapLogic';
import CarbonFootprintLogic from './components/CarbonFootprintLogic';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App App-header">
      <Card style={{width:'35rem', height:'80vh',margin:'1rem'}}>
        <Card.Body>
          <MapLogic/>
        </Card.Body>
      </Card>

      <Card style={{width:'60rem', height:'80vh', margin:'1rem'}}>
        <Card.Body>
          <Map/>
        </Card.Body>
      </Card>
      <CarbonFootprintLogic/>
    </div>
  );
}
// http://localhost:3000/origin-destination/-73;8891016/40;7410592/-73;9896416/40;7410592
export default App;
