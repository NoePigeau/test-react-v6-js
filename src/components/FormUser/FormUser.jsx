import React from 'react'
import { useState } from 'react';

const FormUser = ({sendData}) => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");


    const submit = (e) => {
        sendData(username, pwd)
        e.preventDefault();
    }
    return (
        <form className='form' onSubmit={submit}>
            <input 
                type="text" 
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input 
                type="password" 
                className="input"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="password"
            />
            <input type="submit" value="login" />
        </form>
    )
}

export default FormUser