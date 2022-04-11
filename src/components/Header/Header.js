import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../fiebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    const LogOut = () =>{
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {!user?<Link to="/login">Login</Link>:
                <>
                {user&&<img src={user.photoURL} alt="" style={{width:'20px', borderRadius:'50%'}}/>}
                <button onClick={LogOut}>Sign Out</button>
                </>
                }
            </div>
        </nav>
    );
};

export default Header;