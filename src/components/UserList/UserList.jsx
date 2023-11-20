import {useEffect, useState} from "react";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect( ()=>{
        const token = localStorage.getItem('auth_token')
        fetch('http://192.168.1.220:5000/api/v1/users',{
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(body => {
                setUsers(body);
            });
    },[])
    console.log(users)
    return(
        <div>
            {users.length> 0 && users.map((user,i)=>(
                <h1 key={i}>{user.username}</h1>
            ))}
        </div>
    )
}

export default UserList
