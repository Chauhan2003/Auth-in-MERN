import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { AccountContext } from '../context/AccountProvider'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { account, setAccount } = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        const checkCookie = async () => {
            try {
                if (!account) {
                    const res = await axios.get('http://localhost:8000/auth/userinfo');
                    setAccount(res.data.user);
                }
            } catch (err) {
                toast.error(err.response.data.message);
                navigate('/login');
            }
        };

        checkCookie();
    }, [account]);

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
            <div style={{
                userSelect: 'none',
                maxWidth: '500px'
            }}>
                <span style={{
                    fontSize: '4rem',
                    fontWeight: '600',
                }}>Welcome</span>
            </div>
        </div>
    )
}

export default Home
