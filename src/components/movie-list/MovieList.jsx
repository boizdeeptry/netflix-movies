import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./movie-list.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let res = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            res = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            res = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        res = await tmdbApi.similar(props.type, props.id);
      }
      setItems(res.results);
    };
    getList();
  }, []);

  return (
    <section className="movieList">
      <div className="container">
        <div className="movieList-container">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item,i) => (
                        <SwiperSlide key={i}>
                            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
      </div>
    </section>
  );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default MovieList;
