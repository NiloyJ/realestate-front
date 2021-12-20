import React from 'react';
import { useSelector } from 'react-redux';
import useFirebase from '../../hook/useFirebase';
import Allhomes from '../Allhomes/Allhomes';

const Wishlist = () => {
    const {user} = useFirebase()
    const discover = useSelector((state)=> state.home.Readinglist)
    return (
        <div>
            {
                discover.map((dis)=>(<Allhomes></Allhomes>))
            }
        </div>
        
    );
};

export default Wishlist;