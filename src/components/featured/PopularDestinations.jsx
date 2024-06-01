
import CategoryCard from "../categoryList/CategoryCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import axios from "axios";


const PopularDestinations = () => {
  const [data, setData] = useState(null)
  useEffect(()=>{
    (async ()=>{
      let response = await axios.get(import.meta.env.VITE_BASE_URL+"/api/v1/tours/top-destination")
      setData(response.data.data)
    })()
  },[])

  if(!data){
    return <div>Loading</div>
  }

  return (
    <>
      <div className="px-4 md:px-20 py-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          grabCursor = {true}
          breakpoints={{
            '@0.75': {
              slidesPerView: 3,
              // spaceBetween: 5,
            },
            '@1.00': {
              slidesPerView: 5,
              // spaceBetween: 5,
            },
            '@1.50': {
              slidesPerView: 6,
              // spaceBetween: 5,
            },
            '@1.75': {
              slidesPerView: 8,
              // spaceBetween: 5,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {
              data.map((item, index) => {
                return (
                  <SwiperSlide key={index} >
                    <CategoryCard item={item} />
                  </SwiperSlide>
                )
              }
            )
          }
        </Swiper>

          
      </div>
    </>
  );
};

export default PopularDestinations;
