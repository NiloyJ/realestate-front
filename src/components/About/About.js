import React from 'react';
import about from '../../../src/images/about us.png';
import './About.css'
const About = () => {
    return (
        <div>
            <div className="about p-3" style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <div class="row no-gutters">

                    <div class="col-12 col-sm-5 col-md-6">
                        <img className="p-3" src={about} style={{ height: '100%', width: '50%' }} class="d-block w-100" alt="..." />
                    </div>

                    <div class="col-6  col-md-6" style={{ margin: 'auto' }}>

                        <h1 style={{ fontSize: '2rem' }}>The Leading Real Estate Rental Marketplace</h1>
                        <p><span style={{ width: '10%', color: '#ff4081', fontSize: '4rem' }}> | </span>Some representative placeholder content for the first slide.</p>
                        <div class="row no-gutters">
                            <div class="col-6 col-sm-7 col-md-6" style={{ margin: 'auto' }}>

                                <h5>Smart Home Design</h5><br></br>
                                <h5>Smart Home Design</h5>

                            </div>
                            <div class="col-12 col-sm-5 col-md-6">
                                <h5>Smart Home Design</h5><br />
                                <h5>Smart Home Design</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;