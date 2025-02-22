import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Greeting from './component/Greeting';

function App() {
  return (
    <div className="App">
		<Welcome name="Sounak"/>
		<Welcome name="Ankan"/>

		<Greeting name="Josh"/>
		<Greeting name="Alex"/>

    </div>
  );
}

export default App;
