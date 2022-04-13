import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";

import "./hero-slide.scss";
import HeroItems from "./HeroItems";
import Modal, {ModalContent} from '../Modal/Modal'

const HeroSlide = () => {
    
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });

        setMovieItems(response.results.slice(1, 6));
        console.log(response);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  return (
    <section className="heroSlide">
      <div className="heroSlide__container">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        //   autoplay={{delay: 3000}}
        >
          {movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              <HeroItems item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {
            movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
        }
      </div>
    </section>
  );
};

const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');
    
    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}
export default HeroSlide;
