import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import initializeAuthentication from './Firebase/Firebase.init';
import Register from './components/Join/Register/Register';
import Login from './components/Join/Login/Login';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import About from './components/About/About';
import Addservice from './components/Pages/Addservice';
import Allhomes from './components/Allhomes/Allhomes';
import Details from './components/Details/Details';
import Wishlist from './components/Wishlist/Wishlist';
import AuthProvider from './context/AuthProvider';
import { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import Team from './components/Team/Team';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



initializeAuthentication()

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>

            </Route>
            <Route path="/login" element={<Login></Login>}>

            </Route>
            <Route path="/register" element={<Register></Register>}>

            </Route>
            <Route path="/about" element={<About></About>}>

            </Route>
            <Route path="/team" element={<Team></Team>}>

            </Route>
            <Route path="/allhomes" element={<Allhomes></Allhomes>}>

            </Route>
            <Route path="/home/:name" element={<Details></Details>}>

            </Route>
            <Route path="/addservice" element={<Addservice></Addservice>}>

            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/wishlist" element={<Wishlist/>} />

            </Route>


          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </div >
  );
}

export default App;
