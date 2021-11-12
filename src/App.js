import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Loader from './component/loader/Loader';
import PrivateRoute from './component/PrivateRoute';
import { Context } from './context/Context';
import AddCar from './pages/addCar/AddCar';
import Cars from './pages/cars/Cars';
import AllOrders from './pages/dashboard/component/allOrders/AllOreders';
import Clock from './pages/dashboard/component/clock';
import MyOrders from './pages/dashboard/component/Myorders/MyOrders';
import NewAdim from './pages/dashboard/component/NewAdim';
import Reviews from './pages/dashboard/component/reviews/Reviews';
import Dashboard from './pages/dashboard/Dashboard';
import Details from './pages/details/Details';
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';
import NotFound from './pages/NotFound/NotFound';
import RegisterPage from './pages/registerpage/RegisterPage';


function App() {
  const {isLoading} = useContext(Context)
  return (
    <div className="App">
      {isLoading? <Loader/> : null}
      <Header/>
      <main>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      
      <Route path='/addcar' element={
        <PrivateRoute> <AddCar/> </PrivateRoute>
      }/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/cars/:id' element={
        <PrivateRoute> <Details/> </PrivateRoute>
      }/>
         <Route path='/dashboard' element={
        <PrivateRoute> <Dashboard/> </PrivateRoute>
      }>
          <Route path='newadmin' element={<NewAdim/>}/>
          <Route path='allorders' element={<AllOrders/>}/>
          <Route path='myorders' element={<MyOrders/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          <Route path='' element={<Clock/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
