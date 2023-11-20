import React, { useState } from 'react';
import io from 'socket.io-client'

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const login = (data) => {
        fetch('http://192.168.1.220:5000/api/v1/authorization/login', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json().then(body => {
                const token = body.token;
                const socket = io(`http://192.168.1.220:5000?userId=${data.username}`)
                socket.on('connect',()=>{
                    console.log('Connected!')
                })
                console.log("Token:", token);
                localStorage.setItem('auth_token', token)
            }))
            .catch(error => console.error("Error: ", error));
    };

    return (
        <div>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <button onClick={()=>login(formData)}>Login</button>
        </div>
    );
}

export default Login;