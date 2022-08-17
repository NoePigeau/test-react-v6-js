import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import dataCats from 'data/cats.js'
import { useLocalStorage } from 'services/useLocaleStorage';

const KEY_STORE = "cats"



const CatByName = () => {
    const { id } = useParams();
    let navigate = useNavigate();
    // eslint-disable-next-line
    const [cats, setCats] = useLocalStorage(KEY_STORE, dataCats)
    const cat = cats.find(cat => cat.id === id);

    useEffect(() => {
      if(cat === undefined) navigate('/cats')
    });
  return (
    <div className='container'>
      <Link className='link b back' to='/cats'> &#60; back</Link>
      <div>
        <p>id: {cat.id}</p>
        <p>name: {cat.name}</p>
        <p>description: {cat.description} </p>
      </div>
    </div>
  )
}

export default CatByName