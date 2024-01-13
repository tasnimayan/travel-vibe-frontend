// import useFetch from "../../hooks/useFetch";
import TrendingSkeleton from "../skeletons/TrendingSkeleton";
import TrendingCard from "./TrendingCard";
import "./trending.css";

const TrendingList = () => {
  // const { data, loading, error } = useFetch("/hotels/countByType");
  let loading = false
  let data = [{type:"Adventure", count:25,img:"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="}, {type:"Adventure", count:25,img:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"}, {type:"Adventure", count:25,img:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"}]

  return (
    <div className="pList bg-white py-6 rounded-lg w-full overflow-hidden">
      {loading ? ( <TrendingSkeleton /> ) : (
        <>
          {data.map((item,i) => (
              <TrendingCard key={i}/>
            ))}

            <TrendingCard />
        </>
      )}
    </div>
  );
};

export default TrendingList;
