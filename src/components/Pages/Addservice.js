import React, { useState } from 'react';

const Addservice = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const[room,setRoom] = useState('');
    const[bathroom,setBathroom] = useState('')
    const [img, setImg] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    const handleprice = (e) => {
        setPrice(e.target.value)
    }

    const handleRoom = (e) =>{
        setRoom(e.target.value)
    }

    const handleBathroom = (e) =>{
        setBathroom(e.target.value)
    }

    const handleImg = (e) =>{
        setImg(e.target.value)
    }

    const handleAddUser = () => {
        const data = {name,location,price,room,bathroom,img}
        console.log({ name, location, price,img });
        fetch('http://localhost:5000/addhome', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div>
            <h2>This is add service</h2>
            <div>
                <input type="text" placeholder='Name' onChange={handleName} className='p-2 mt-3' /><br></br>
                <input type="number" placeholder='Total Room' onChange={handleRoom} className='p-2 mt-3' /><br></br>
                <input type="number" placeholder='Total Bathroom' onChange={handleBathroom} className='p-2 mt-3' /><br></br>
                <input type="text" placeholder='img' onChange={handleImg} className='p-2 mt-3' /><br></br>
                <input type="text" placeholder='location' onChange={handleLocation} className='p-2 mt-3' /><br></br>
                <input type="text" placeholder='price' onChange={handleprice} className='p-2 mt-3' /><br></br>
                <button onClick={handleAddUser} className='btn btn-success'>Adduser</button>
            </div>
        </div>
    );
};

export default Addservice;