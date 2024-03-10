import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Home = () => {
    useEffect(() => {
        const checkCookie = async () => {
            try {
                const res = await axios.get('http://localhost:8000/auth/userinfo');

            } catch (err) {
                console.log(err);
            }
        }
        checkCookie();
    }, [])
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
