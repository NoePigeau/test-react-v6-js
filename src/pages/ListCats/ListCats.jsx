import React from 'react'
import dataCats from 'data/cats.js'
import CardCat from 'components/CardCat/CardCat'
import './ListCats.scss'
import { useLocalStorage } from 'services/useLocaleStorage'

const KEY_STORE = "cats"

const ListCats = () => {
  const [cats, setCats] = useLocalStorage(KEY_STORE, dataCats)

  const removeCat = (id) => {
    const newCats = cats.filter(cat => cat.id !== id);
    setCats(newCats);
  }

  return (
    <div className='container'> 
      <h1>Cats List</h1>
      <section className='list-cat'>
        {cats.map(cat => {
          return <CardCat cat={cat} key={cat.id} removeCat={removeCat}/>
        })}
      </section>
    </div>
    
  )
}

export default ListCats
