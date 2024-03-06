
import CategoryCard from "../categoryList/CategoryCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const PopularDestinations = () => {
  let data = [
  {
      image:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title:"Berlin",
      desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    title:"Berlin",
    desc:"properties"
  },{
    image:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    title:"Berlin",
    desc:"properties"
  },
  {
    image:"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    title:"Berlin",
    desc:"properties"
  }
  ]

  return (
    <>
      <div className="px-4 md:px-20 py-12">
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
