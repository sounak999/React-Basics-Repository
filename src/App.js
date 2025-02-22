import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Greeting from './component/Greeting';
import { FirstComponent as FC, SecondComponent } from './component/MyComponent';
import MC from './component/MyComponent'

function App() {
  return (
    <div className="App">
		<Welcome name="Sounak"/>
		<Welcome name="Ankan"/>

		<Greeting name="Josh"/>
		<Greeting name="Alex"/>

		<FC />
		<SecondComponent />

		<MC />

    </div>
  );
}

export default App;
