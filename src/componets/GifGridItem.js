import React, { Component } from 'react'

export const GifGridItem = ( img ) => {//el img tambien se podria desestructurar {url, title}
  console.log(img);

    return (
      <div className='card animate__animated animate__flipInX'>
        <img src={ img.url } alt={ img.title } />
        <p> { img.title } </p>
      </div>
    )
}