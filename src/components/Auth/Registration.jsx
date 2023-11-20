import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const registrate = (data) => {
        fetch('http://192.168.1.220:5000/api/v1/authorization/registration', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(response => console.log(response))
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
            <button onClick={()=>registrate(formData)}>Registration</button>
        </div>
    );
}

export default Registration;
