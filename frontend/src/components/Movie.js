import React from 'react';
import { ImageUrl } from '../constants';


function Movie ({data}) {
  
  return (  
    <li className="movie" style={{ backgroundImage: `url(${ImageUrl}${data.poster_path})`}}>
      <h3 className="movietitle"> {data.original_title}</h3>
    </li>
  )
}

export default Movie;