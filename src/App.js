import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Greeting from './component/Greeting';
import { FirstComponent as FC, SecondComponent } from './component/MyComponent';
import MC from './component/MyComponent'
import Hello from './component/HelloWorld'
import Student from './component/Student'
import Employee from './component/Employee'
import User from './component/User';
import EventHandling from './component/EventHandling';
import ConditionalRendering from './component/ConditionalRendering';

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

		{/* <Student student={student} skills={skills} /> */}

		{/* <Student 
		firstName = "Sounak"
		lastName = "Saha"
		email = "sounaksaha@gmail.com"/> */}

		{/* <Employee /> */}

		{/* <User /> */}

		{/* <EventHandling /> */}

		<ConditionalRendering />

    </div>
  );
}

export default App;
