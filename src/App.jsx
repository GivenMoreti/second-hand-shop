import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { PageLayout } from './Layout/PageLayout/PageLayout';
import { CartPage } from '../pages/CarPage/CartPage';
function App() { 

  return (
    <PageLayout>
      <Routes>
        <Route path ="/" element = {<HomePage />} />
        <Route path ="/cart" element={<CartPage/>}/>
      </Routes>
    </PageLayout>
  )
}

export default App
