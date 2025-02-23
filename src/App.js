import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Greeting from './component/Greeting';
import { FirstComponent as FC, SecondComponent } from './component/MyComponent';
import MC from './component/MyComponent'
import Hello from './component/HelloWorld'
import Student from './component/Student'

function App() {
	const student = {
		firstName: "Sounak",
		lastName: "Saha",
		email: "sounak@gmail.com"
	}

	const skills = ['Java', 'Spring Boot', 'JavaScript']

  return (
    <div className="App">
		{/* <Welcome name="Sounak"/>
		<Welcome name="Ankan"/>

		<Greeting name="Josh"/>
		<Greeting name="Alex"/>

		<FC />
		<SecondComponent />

		<MC /> */}

		{/* <Hello /> */}

		<Student student={student} skills={skills} />

    </div>
  );
}

export default App;
