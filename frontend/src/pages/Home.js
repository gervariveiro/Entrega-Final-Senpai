import React from 'react';
import Movy from '../components/buttons/movy';
import Footer from '../components/footer/footer';
import Icons from '../components/Icons/Icons';
import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';
import { getPopularMovies, getUpcomingMovies, getNowPlayingMovies} from '../api/Index.js';





function Home () {

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((response) => {
        setPopularMovies(response.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    }, []);

    useEffect(() => {
      getUpcomingMovies()
        .then((response) => {
          setUpcomingMovies(response.results);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }, []);

    useEffect(() => {
      getNowPlayingMovies()
        .then((response) => {
          setNowPlayingMovies(response.results);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      }, []);

    return (
  
      <div className="containerHome">
          <div className="play">
            <ul className="categories">
              <li>Kids</li>
              <li>•</li>
              <li>Fantasy Movie</li>
              <li>•</li>
              <li>Action</li>
            </ul>
            <Movy />
            <Icons />
          </div>
        <div className="movies">
          <div>
          <Carousel
          data={popularMovies}
          name="Peliculas Populares"
         />
          <Carousel
          data={upcomingMovies}
          name="Estrenos"
         />
         <Carousel
          data={nowPlayingMovies}
          name="Películas más vistas"
         />
        </div>
        </div>
            <Footer />
      </div>
      )
    }
  
  export default Home;