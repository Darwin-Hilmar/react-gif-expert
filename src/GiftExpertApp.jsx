// rafc
// import React from 'react'

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory) => {
        if( categories.includes(newCategory) ) return;
        // setCategories([ 'Batman', ...categories]);
        setCategories([ newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Valorant']);
        // console.log(newCategory);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories}
            onNewCategory={(value)=>onAddCategory(value)}
         />

        {/* Listado de gifs */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
            
        { 
            categories.map( ( category) =>(
                <GifGrid key={ category } category={ category }/>
            ))
        }
            

            {/* Gif Item */}
    </>
  )
}
