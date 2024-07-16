import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News_Body from "./components/News_Body";
import App_Header from "./common/App_Header";
import Footer from './common/Footer';
import Home from './components/Home'
import Magazine from './components/Magazine'
import Login from './components/Login'
import Register from './components/Register'
import Subscription from './components/Subscription'
import Help from './components/Help'
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <>
    <AuthProvider>
      <Router>
          <App_Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/news' element={<News_Body/>} />
            <Route path='/magazine' element={<Magazine/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/subscription' element={<Subscription/>} />
            <Route path='/help' element={<Help/>} />
          </Routes>
          <Footer/>
      </Router> 
    </AuthProvider>
       
    </>
  );
}

export default App;
