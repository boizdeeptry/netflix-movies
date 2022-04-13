import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";
const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="topMovies" style={{ marginTop: "16rem" }}>
          <h2 className="topMovies_heading heading">Top Movies</h2>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="topRateMovies" style={{ marginTop: "3rem" }}>
          <h2 className="topRateMovies_heading heading">Top Rated Movies</h2>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="topTV" style={{ marginTop: "3rem" }}>
          <h2 className="topTV_heading heading">Top TV Show</h2>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="topRateTV" style={{ marginTop: "3rem" }}>
          <h2 className="topRateTV_heading heading">Top Rated TV</h2>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
