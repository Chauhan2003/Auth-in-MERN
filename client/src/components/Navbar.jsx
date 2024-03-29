import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        try {
            const res = await axios.get('http://localhost:8000/auth/logout');
            navigate('/login');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }
    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            padding: '10px 50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'black',
            background: 'white'
        }}>
            <span style={{
                fontSize: '25px',
                fontWeight: '600',
                userSelect: 'none'
            }}>Auth</span>
            <button onClick={handleLogout} style={{
                padding: '7px 12px',
                fontSize: '16px',
                background: 'transparent',
                borderRadius: '4px',
                border: '1.5px solid black',
                cursor: 'pointer'
            }}>Logout</button>
        </div >
    )
}

export default Navbar
