import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {
    
    //const categories = ['Game of Thrones', 'War World Z', 'Total War']; en este caso no podemos modificar la constante
    const [categories, setCategories] = useState([]);  //const [categories, setCategories] = useState(['Gme of Thrones']); este codigo original hacia que el buscador ya trajera un valor por defecto

    //const handleAdd = () =>
    //{
      //  setCategories([...categories, 'BlackMirrow']); tambien este funciona
    //    setCategories( cate => [ ...cate, 'setInputValue']);
   // }
    return ( 
        <>
            <h2 > GifExpertApp </h2> <hr />
            <AddCategory setCategories={ setCategories }/>
                <ol>
                    {
                        categories.map(category => 
                            <GifGrid 
                            key = { category }
                            category={ category } />
                        )
                    }
                </ol>
        </>
    )
}