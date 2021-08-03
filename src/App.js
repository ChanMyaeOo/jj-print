import React from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import './style.css'

const App = () => {
    return (
        <div>
            <Layout>
                <Home />
            </Layout>
        </div>
    )
}

export default App
