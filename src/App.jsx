import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { PageLayout } from './Layout/PageLayout/PageLayout';
import { CartPage } from '../pages/CarPage/CartPage';
import {Payment} from "../pages/Payment/Payment";
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage';
import { SellPage } from '../pages/SellPage/SellPage';
import { Delivery } from '../pages/Delivery/Delivery';
import { WishList } from '../pages/WishList/WishList';

function App() { 

  return (
    <PageLayout>
      <Routes>
        <Route path ="/" element = {<HomePage />} />
        <Route path ="/cart" element={<CartPage/>}/>
        <Route path='/payment' element = {<Payment/>}/>
        {/* filter page */}
        <Route path='/categories' element = {<CategoriesPage/>}/> 
        <Route path='/profile' element = {<ProfilePage/>}/> 
        <Route path='/sell' element = {<SellPage/>}/> 
        <Route path='/delivery' element = {<Delivery/>}/> 
        <Route path='/wishlist' element={<WishList/>}/>
      </Routes>
    </PageLayout>
  )
}

export default App
