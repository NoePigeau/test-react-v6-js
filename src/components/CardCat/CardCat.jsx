import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./CardCat.scss"

const CardCat = ({cat, removeCat}) => {
    let navigate = useNavigate();

  return (
    <article className='card'>
        <p className='right' onClick={() => removeCat(cat.id)}>X</p>
        <h1 onClick={() => navigate(`/cats/${cat.id}`)}>{cat.name}</h1>
        <p>{cat.description}</p>
    </article>
  )
}

export default CardCat