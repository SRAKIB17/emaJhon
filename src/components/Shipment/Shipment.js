import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../fiebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');


    const handleNameBlur = (event) => {
        setName(event.target.value)
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault()

    }
    const handlePhoneNum = (event) => {
        setPhone(event.target.value)
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Shipping information</h1>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="" id="name" onBlur={handleNameBlur} required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" readOnly value={user?.email} style={{backgroundColor: 'grey',color:'white'}}/>
                </div>

                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="" id="address" onBlur={handleAddress} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" name="" id="phone" onBlur={handlePhoneNum} required/>
                </div>
                <input type="submit" value="Add Shipping" />
            </form>

        </div>
    );
};

export default Shipment;