import React from "react";
import apiConfig from "../../api/apiConfig";
import { Link, useHistory } from "react-router-dom";
import tmdbApi, { category } from "../../api/tmdbApi";
const HeroItems = (props) => {
  let hisrory = useHistory();
  const item = props.item;
  const background = apiConfig.orginalImage(item.backdrop_path);
  const gotoVideos = () => {
    console.log("click");
    hisrory.push("/movie/" + item.id);
  };

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };
  return (
    <div
      className="heroSlide__item"
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="heroSlide__item-container">
        <div className="heroSilde__item__poster">
          <img
            className="heroSlide__item-image"
            src={apiConfig.w500Image(item.poster_path)}
            alt="This is Poster!"
          />
        </div>
        <div className="heroSlide__item-content">
          <h1 className="heroSlide__item-heading">{item.title}</h1>
          <p className="heroSlide__item-desc">Description: {item.overview}</p>
          <p className="heroslide__item-release">
            Release: {item.release_date}
          </p>
          <span className="heroSlide__item-rate">
            Rating: {item.vote_average}
          </span>
          <div className="heroSlide__item-btn">
            <Link to="/" className="heroSlide__item-watch" onClick={gotoVideos}>
              Watch now
            </Link>
            <Link
              to="/"
              className="heroSlide__item-trailer"
              onClick={setModalActive}
            >
              Watch trailer
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroItems;
