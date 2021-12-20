import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
const Details = () => {
    const myArray = []
    const { name } = useParams()
    const [getBooking, setBooking] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homes/')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    for (const i of getBooking) {
        if (i.name == name) {
            myArray.push(i.name)
            myArray.push(i.price)
            myArray.push(i.img)
            myArray.push(i.location)
            myArray.push(i.room)
            myArray.push(i.bathroom)

        }
    }
    console.log(myArray)

    return (
        <div>
            <h1>Hello {name}</h1>

            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{myArray[0]}</h3>
                        <h6 className="card-subtitle">globe type chair for rest</h6>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="white-box text-center"><img style={{height:'100%', width:'80%'}} src={myArray[2]} className="img-responsive" /></div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <h4 className="box-title mt-5">Product description</h4>
                                <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                                <h2 className="mt-5">
                                    $153<small className="text-success">(36%off)</small>
                                </h2>
                                <button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title data-original-title="Add to cart">
                                    <i className="fa fa-shopping-cart" />
                                </button>
                                <button className="btn btn-primary btn-rounded">Buy Now</button>
                                <h3 className="box-title mt-5">Key Highlights</h3>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check text-success" />Sturdy structure</li>
                                    <li><i className="fa fa-check text-success" />Designed to foster easy portability</li>
                                    <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
                                </ul>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h3 className="box-title mt-5">General Info</h3>
                                <div className="table-responsive">
                                    <table className="table table-striped table-product">
                                        <tbody>
                                            <tr>
                                                <td width={390}>Location</td>
                                                <td>{myArray[3]}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{myArray[1]}</td>
                                            </tr>
                                            <tr>
                                                <td>Total room</td>
                                                <td>{myArray[4]}</td>
                                            </tr>
                                            <tr>
                                                <td>Type</td>
                                                <td>Office Chair</td>
                                            </tr>
                                            <tr>
                                                <td>Style</td>
                                                <td>Contemporary&amp;Modern</td>
                                            </tr>
                                            <tr>
                                                <td>Wheels Included</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <td>Upholstery Included</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <td>Upholstery Type</td>
                                                <td>Cushion</td>
                                            </tr>
                                            <tr>
                                                <td>Head Support</td>
                                                <td>No</td>
                                            </tr>
                                            <tr>
                                                <td>Suitable For</td>
                                                <td>Study&amp;Home Office</td>
                                            </tr>
                                            <tr>
                                                <td>Adjustable Height</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <td>Model Number</td>
                                                <td>F01020701-00HT744A06</td>
                                            </tr>
                                            <tr>
                                                <td>Armrest Included</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <td>Care Instructions</td>
                                                <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                            </tr>
                                            <tr>
                                                <td>Finish Type</td>
                                                <td>Matte</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;