import FormUser from 'components/FormUser/FormUser';
import MsgError from 'components/MsgError';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from 'services/useToken';
const users = {
    'test@test.fr' : 'test1234'
}


const Login = () => {
    // eslint-disable-next-line
    const [error, setError] = useState("");
    const { setToken, token } = useToken();
    const navigate = useNavigate();
    //sessionStorage.clear();

    
    const sendData = (username, pwd) => {
        console.log(username, pwd)
        setError("");
        if(users[username] && users[username] === pwd) {
            setToken({
                token: "caca"
            });
            navigate('/cats/new')
            console.log(token)
        }else {
            setError("Identifiants Incorrects")
        }
    }
    return (
        <div className="cont-shadow cont-form">
            <h1>Login</h1>
            <FormUser sendData={sendData} />
            <MsgError msg={error} />
            {/* {error.length > 0 &&
                <p> {error} </p>
            } */}
        </div>
    )
}

export default Login