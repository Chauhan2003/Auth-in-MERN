import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const navigate = useNavigate();

    const handleRegisterUser = async (e) => {
        e.preventDefault();
        try {
            const data = {
                username,
                email,
                password,
                confirmpassword
            }

            const res = await axios.post('http://localhost:8000/auth/register', data);
            toast.success(res.data.message);
            navigate('/login');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black'
        }}>
            <div style={{
                minWidth: '420px',
                padding: '15px 15px',
                background: 'white',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                borderRadius: '4px'
            }}>
                <span style={{
                    fontSize: '35px',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginBottom: '10px'
                }}>Register</span>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <span style={{
                        fontSize: '15px',
                        fontWeight: '600'
                    }}>Username:</span>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} style={{
                        fontSize: '17px',
                        padding: '8px 10px',
                        outline: 'none',
                        border: '1.5px solid black',
                        borderRadius: '4px'
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <span style={{
                        fontSize: '15px',
                        fontWeight: '600'
                    }}>Email:</span>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{
                        fontSize: '17px',
                        padding: '8px 10px',
                        outline: 'none',
                        border: '1.5px solid black',
                        borderRadius: '4px'
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <span style={{
                        fontSize: '15px',
                        fontWeight: '600'
                    }}>Password:</span>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} style={{
                        fontSize: '17px',
                        padding: '8px 10px',
                        outline: 'none',
                        border: '1.5px solid black',
                        borderRadius: '4px'
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <span style={{
                        fontSize: '15px',
                        fontWeight: '600'
                    }}>Confirm Password:</span>
                    <input type='password' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} style={{
                        fontSize: '17px',
                        padding: '8px 10px',
                        outline: 'none',
                        border: '1.5px solid black',
                        borderRadius: '4px'
                    }} />
                </div>
                <button onClick={handleRegisterUser} style={{
                    padding: '9px',
                    fontSize: '20px',
                    color: 'white',
                    background: 'green',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>Register</button>
                <span>Already have an account? <Link to='/login' style={{
                    color: 'red'
                }}>Login</Link></span>
            </div>
        </div>
    )
}

export default Register
