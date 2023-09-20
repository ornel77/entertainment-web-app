import { useEffect, useState } from "react";
import data from "../../data.json";
import TrendingCard from "../../components/trending-card/TrendingCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Scrollbar, Pagination } from "swiper/modules";

const Trending = () => {
  const [trendData, setTrendData] = useState([]);
  useEffect(() => {
    setTrendData(data.filter((elmt) => elmt.isTrending === true));
  }, []);
  return (
    <section className="container">
      <h2>Trending</h2>
      <Swiper
        className="trending-container mySwiper"
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {trendData.map((elmt) => (
          <TrendingCard key={elmt.title} trending={elmt} />
        ))}
      </Swiper>
    </section>
  );
};

export default Trending;
