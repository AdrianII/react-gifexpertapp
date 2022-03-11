import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

 // const [count, setCount] = useState();

 // const [images, setImages] = useState([]);

const { data, loading } = useFetchGifs( category );// se podria desestructurar aqui {data, loading}


 // useEffect(() =>{
 //   getGifs( category ).then( setImages);//se ejecuta solo una vez
 // }, [ category ])

    //getGrifs();se ejecuta varias veces

  return (
    <>
      <h3 className='animate__pulse'> { category } </h3>

      {
        loading && <p className='animate__headShake'>cargando</p>
      }
      <div className="card-grid">
          {
             data.map( img => (
              <GifGridItem 
              //img={ img } 
              key={ img.id }
              { ...img }
              />
            ))
          }
      </div>*
    </>
  )
}

//empezo a fallar al guardar los cambios del minuto 6:32 del curso #80: se soluciono... error: no envie la categoria al useFetchGifs: ln 12