
import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";

import { useState } from 'react';
import DataProvider from './context/DataProvider';

//IMPORTING COMPONENTS 
import Toggleaccount from './components/Account/Toggleaccount';
import Home from './components/Home/Home';
import CreatePage from './components/PublishCode/CreatePage';
import ReadPage from './components/ReadCode/ReadPage';
import DetailView from './components/details/detailView';




const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Outlet />
    </> : (
    <>
    <Navigate replace to='/login' />
    </>
    )
};




function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element = { <Toggleaccount isUserAuthenticated={isUserAuthenticated} /> } />

        <Route path="/" element ={ <div><Home/></div> } />
        

        <Route path='/createPage' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/createPage" element ={<div><CreatePage/></div>} />
        </Route>

        <Route path='/readPage' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/readPage" element ={<div><ReadPage/></div>} />
        </Route>

        <Route path='/readPage/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/readPage/details/:id" element ={<div><DetailView/></div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </DataProvider>

  );
}

export default App;
