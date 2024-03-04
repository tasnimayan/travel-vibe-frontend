// import useFetch from "../../hooks/useFetch";
import TrendingSkeleton from "../skeletons/TrendingSkeleton";
import TrendingCard from "./TrendingCard";
import "./trending.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const TrendingList = () => {
  // const { data, loading, error } = useFetch("/hotels/countByType");
  let loading = false
  let data = [{type:"Adventure", count:25,img:"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="}, {type:"Adventure", count:25,img:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"}, {type:"Adventure", count:25,img:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"}]

  return (
    <div className=" bg-white py-6 rounded-lg w-full overflow-hidden">
      {loading ? ( <TrendingSkeleton /> ) : (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={160}
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
                      <TrendingCard />
                    </SwiperSlide>
                  )
                }
              )
            }
          </Swiper>

        </>
      )}
    </div>
  );
};

export default TrendingList;
