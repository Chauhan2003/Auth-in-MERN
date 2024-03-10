import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Navbar />
            <span style={{
                fontSize: '5rem',
                fontWeight: '600',
                userSelect: 'none'
            }}>Home Page</span>
        </div>
    )
}

export default Home
