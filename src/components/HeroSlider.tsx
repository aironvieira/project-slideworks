import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import Rating from "./Rating";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/hero.css";

export default () => {
  let [objMovies, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  // Função de requisição com axios
  useEffect(() => {
    const buscarDestaques = async () => {
      try {
        const response = await axios.get(
          "https://movies.slideworks.cc/movies?limit=3"
        );

        setData(response.data.data); // Supondo que 'response.data' seja um array com os dados
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    buscarDestaques();
  }, []);

  if (loading)
    return (
      <p style={{ textAlign: "center", padding: "15px" }}>Carregando...</p>
    );

  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {objMovies.map((item: any, index) => (
          <SwiperSlide key={index}>
            <div className="hero-wrapper">
              <img className="hero-image" src={item.image_url} alt="" />
              <div className="hero-infos">
                <h4 className="hero-text hero-destaque">Destaque do Mês</h4>
                <h2 className="hero-text hero-title">{item.title}</h2>
                <div className="hero-subtitle">
                  <Rating key={item.rating} rate={item.rating} />
                  <p className="hero-text hero-crew">{item.crew}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
