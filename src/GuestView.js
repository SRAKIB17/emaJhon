import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate} from 'react-router-dom';
import auth from './fiebase.init';

const GuestView = ({children}) => {
    const [user] = useAuthState(auth)

    if(user){
        console.log(54354354)
        return <Navigate to='/'></Navigate>
    }
    return children;
};

export default GuestView;