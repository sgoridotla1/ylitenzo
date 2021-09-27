import './App.css'

import { AppContext, AppProvider, initialState } from './AppContext'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'

import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Layout from './components/Layouts/MainLayout'
import Navigation from './components/Navigation/Navigation'
import Pagination from './components/Pagination/Pagination'
import Product from './pages/Product/Product'
import ProductCard from './components/ProductCard/ProductCard'
import ProductLayout from './components/Layouts/ProductLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Header />
          <Navigation />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
          <Footer />
          <Cart />
        </Layout>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
