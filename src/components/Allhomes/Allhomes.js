import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishList } from '../../redux/actions/homeAction';

import './Allhomes.css'
const Allhomes = () => {
    const dispatch = useDispatch()
    const [homes, setHomes] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/homes")
            .then(res => res.json())
            .then(result => setHomes(result))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deletehome/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                        <h5 class="section-title h1"><span style={{color:'#ff4081'}}>HOUSES</span> FOR RENT</h5>
                        {homes.map(home => <div className="row p-2 bg-white border rounded" style={{ marginBottom: '5%' }}>
                            <div className="col-md-3 mt-"><img className={home.img} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>{home.name}</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div><span>310</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Good neighbourhood</span><span className="dot" /><span>Installmen available</span><span className="dot" /><span>Best finish<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Full furnished</span><span className="dot" /><span>Family friendly</span><span className="dot" /><span>Casual<br /></span></div>
                                <p className="text-justify text-truncate para mb-0">Garden available<br /><br /></p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">{home.price}</h4><span className="strike-text">$20.99</span>
                                </div>
                                <h6 className="text-success">Free shipping</h6>
                                <div className="d-flex flex-column mt-4">
                                    <Link to={`/home/${home.name}`}><button className="btn btn-primary btn-sm" type="button">Details</button></Link>
                                    <button onClick={() => dispatch(addToWishList(home.name))} className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                                <button className='btn btn-success mt-2'>update</button>
                                <button onClick={() => handleDelete(home._id)} className='btn btn-danger mt-2'>delete</button>
                            </div>
                        </div>)}


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Allhomes;