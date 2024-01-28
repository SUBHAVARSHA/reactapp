import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/Propscomponent';
//import Statecomponent from './components/classcomponents/statecomponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from './components/functionalcomponents/Education';
import About from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
import Home from './components/functionalcomponents/Home';
import SignUp from './components/functionalcomponents/SignUp';
import FeedbackForm from './components/functionalcomponents/FeedbackForm';
import Reference from './components/functionalcomponents/Reference';
import Memo from './components/functionalcomponents/Memo';
import CallBack from './components/functionalcomponents/Callback';
function App() {
  return (
  <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/education" element={<Education />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/useRef" element={<Reference />} />
          <Route path="/useMemo" element={<Memo />} />
          <Route path="/callBack" element={<callBack />} />

  <Route path="/feedbackform" element={<FeedbackForm />} />


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
