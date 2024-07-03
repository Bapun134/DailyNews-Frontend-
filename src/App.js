import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import News_Body from "./components/News_Body";
import App_Header from "./common/App_Header";
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <Router>
        <App_Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News_Body/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>  
    </>
  );
}

export default App;
