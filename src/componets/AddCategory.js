import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const[inputValue, setInputValue] = useState('')

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
    //console.log( e.target.value );
    //console.log(inputValue );
    //console.log( setInputValue);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim().length > 0)
      setCategories( cate => [inputValue])  //setCategories( cate => [inputValue, ...cate]) este codigo original mantenia la busquedas anteriores y solo agregaba una nueva al principio del objeto
  }
  return (
    <form onSubmit={ handleSubmit }>
        <input 
        type="text" 
        placeholder="Buscar"
        value={ inputValue }
        onChange= { handleInputChange}

        />
    </form>
  )
}
AddCategory.propTypes =
  {
    setCategories: PropTypes.func.isRequired
  }