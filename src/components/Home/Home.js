import React from 'react';
import './Home.css';
import image from '../../../src/images/realhome.png';
import about from '../../../src/images/about us.png'
import Team from '../Team/Team';
import About from '../About/About';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { NavLink } from 'react-router-dom';
import Allhomes from '../Allhomes/Allhomes';
import { useSelector } from 'react-redux';
import useFirebase from '../../hook/useFirebase';
import useAuth from '../../hook/useAuth';
import Whyus from '../About/Whyus/Whyus';
const Home = () => {
    const discover = useSelector((state) => state.home.Readinglist);
    const { signInUsingGoogle, user, logout } = useAuth()
    return (
        <div>
            {/* <div id='navbar'>
                <ul>
                    <li style={{ marginLeft: '29%' }}><a href="#">HomeHall</a></li>
                    <Link to="/home"><li><a href="#">Home</a></li></Link>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <Link to="/register"><li><a href="#">Register</a></li></Link>
                    <Link to="/wishlist"><li><a href="#">wishlist</a></li></Link>
                    <Link to="/login"><li><a href="#">Login</a></li></Link>
                    <h2>{user.displayName}</h2>
                    {user?.email && <button onClick={logout} className='btn btn-primary'>Log out</button>}
                </ul>
            </div> */}

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home-E</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/home"><li><a style={{ color: 'black' }} href="#">Home</a></li></Link>
                            <Link to="/about"><li><a style={{ color: 'black' }} href="#">About</a></li></Link>
                            <Link to="/team"><li><a style={{ color: 'black' }} href="#">Team</a></li></Link>
                            <Link to="/register"><li><a style={{ color: 'black' }} href="#">Register</a></li></Link>
                            <Link to="/wishlist"><li><a style={{ color: 'black' }} href="#">wishlist</a></li></Link>
                            <Link to="/login"><li><a style={{ color: 'black' }} href="#">Login</a></li></Link>
                            <h2>{user.displayName}</h2>
                            {user?.email && <button onClick={logout} className='btn btn-primary'>Log out</button>}
                        </div>
                    </div>
                </div>
            </nav>


            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row no-gutters">

                            <div class="col-6  col-md-6" style={{ margin: 'auto' }}>

                                <h5> <span style={{ color: '#ff4081', fontWeight: 'bolder', fontSize: '3rem' }}>FIND  </span>YOUR DREAM HOME</h5>
                                <p><span style={{ width: '10%', color: '#ff4081', fontSize: '4rem' }}> | </span>Some representative placeholder content for the first slide.</p>

                                <a id="button" href="#">Make a enquiry</a>

                            </div>
                            <div class="col-6 col-sm-5 col-md-6">
                                <img src={image} style={{ height: '100%', width: '50%' }} class="d-block w-100" alt="..." />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <About></About>
            <Team></Team>
            <Allhomes></Allhomes>
            <Whyus></Whyus>

            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Form */}
                    <section className>
                        <form action>
                            {/*Grid row*/}
                            <div className="row d-flex justify-content-center">
                                {/*Grid column*/}
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-5 col-12">
                                    {/* Email input */}
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example29" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example29">Email address</label>
                                    </div>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-auto">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </form>
                    </section>
                    {/* Section: Form */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">House-E</a>
                </div>
                {/* Copyright */}
            </footer>

        </div>


    );
};

export default Home;