
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthRequir from './AuthRequir';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import GuestView from './GuestView';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
        <Route path='/orders' element={<Orders></Orders>}/>
        <Route path='/inventory' element={<AuthRequir><Inventory></Inventory></AuthRequir>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/login' element={<GuestView><Login></Login></GuestView>}/>
        <Route path='/signup' element={<GuestView><SignUp></SignUp></GuestView>}/>
        <Route path='/shipment' element={<AuthRequir><Shipment></Shipment></AuthRequir>}/>
      </Routes>
    </div>
  );
}

export default App;
