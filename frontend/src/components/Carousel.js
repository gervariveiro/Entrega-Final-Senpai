import Movie from './Movie';

function Carousel ({ data, name }) {
  return (
    <div>
      <h1>{name}</h1>
      <ul  className="carousel">
        {data?.slice(0,9).map((movie) => <Movie data={movie}/>)}
      </ul>
    </div>
  )
}

export default Carousel;

