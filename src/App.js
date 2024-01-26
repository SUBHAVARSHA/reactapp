import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/Propscomponent';
//import Statecomponent from './components/classcomponents/statecomponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from './components/functionalcomponents/Experience';
import About from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
import Home from './components/functionalcomponents/Home';
import SignUp from './components/functionalcomponents/SignUp';


function App() {
  return (
  <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/experience" element={<Experience />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/*<PropsComponent name="Hello everyone" course="ECE"></PropsComponent>*/}
      <header className="App-header">
        {/*<Statecomponent/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
      <p>&copy; 2024 All Rights Reserved By <span>authorized</span></p>
      <div>
        <p>Follow us on social media:</p>
        <div className="social-links">
          <a href="https://www.instagram.com/_.subhavarsha_yuvaraj.__?igsh=MWp6cDM0dmpxZjY3ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            Instagram<br></br>
          </a>
          <a href="https://github.com/SUBHAVARSHA" target="_blank" rel="noopener noreferrer">
            GitHub<br></br>
          </a>
          
        </div>
      </div>

</footer>
    </div>
  );
}

export default App;
