import FormCat from 'components/FormCat/FormCat'
import React from 'react'
import dataCats from 'data/cats.js'
import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from 'services/useLocaleStorage';
import "./AddCat.scss";


const KEY_STORE = "cats"


const AddCat = () => {
    const [cats, setCats] = useLocalStorage(KEY_STORE, dataCats)
    const sendData = (name, description) => {
        setCats([
            ...cats, 
            {
                id: uuidv4(),
                name,
                description
            }
        ])
    }
    return (
        <div className="cont-shadow cont-form">
            <h1>Add new cat</h1>
            <FormCat sendData={sendData} />
        </div>
    )
}

export default AddCat