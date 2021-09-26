import './App.css'

import React, { useState } from 'react'

import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Layout from './components/Layouts/MainLayout'
import Navigation from './components/Navigation/Navigation'
import Pagination from './components/Pagination/Pagination'
import ProductCard from './components/ProductCard/ProductCard'
import ProductLayout from './components/Layouts/ProductLayout'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Layout>
                <Header />
                <Navigation />
                <div className="content">
                    <ProductLayout>
                        {Array(10)
                            .fill('')
                            .map((_, key) => (
                                <ProductCard key={key} />
                            ))}
                    </ProductLayout>
                </div>
                <Pagination />
                <Footer />
            </Layout>
            <Cart />
        </>
    )
}

export default App
