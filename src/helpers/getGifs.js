export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TFTjpryzvzk9GiE1k0B4MR6CLitDkB4n&q=${ encodeURI( category ) }`;  //&limit=10 este ultimo componente de la url estaba originalm,ente para limitar los resultados a maximo 10
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id : img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    return gifs;
}