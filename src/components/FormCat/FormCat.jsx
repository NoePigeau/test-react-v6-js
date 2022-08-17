import React from 'react'
import { useState } from 'react'
import "./FormCat.scss"

const FormCat = ({sendData}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {

        sendData(name, description)
        e.preventDefault();
    }

    return (
        <form onSubmit={submit} className="form">
            <input 
                placeholder="name"
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className="input"
            />
            <input 
                placeholder="description"
                type="text" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                className="input"
            />
            <input type="submit" value="Add" />
        </form>
    )
}

export default FormCat