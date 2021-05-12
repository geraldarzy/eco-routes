
import './App.css';
import Map from './components/Map'
import MapLogic from './components/MapLogic'

function App() {
  return (
    <div className="App App-header">
      <MapLogic/>
      <Map/>
    </div>
  );
}
// http://localhost:3000/origin-destination/-73;8891016/40;7410592/-73;9896416/40;7410592
export default App;
