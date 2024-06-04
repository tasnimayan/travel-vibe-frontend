import { useDispatch, useSelector } from "react-redux";
import GuideCard from "../../components/guide/GuideCard";
import { useEffect } from "react";
import { fetchGuides } from "../../redux/state/guide/guideSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../../components/mini/Pagination";


const AllGuides = () => {
  const dispatch = useDispatch()
  const {guides, totalPages } = useSelector(state=>state.guide)
  const [query] = useSearchParams()
  const path = useLocation()
  let page = query.get('page') || 1


  useEffect(()=>{
    dispatch(fetchGuides(page))
  },[dispatch])

  if(!guides){
    return <div>No guide available</div>
  }

  return (
    <section className="container mx-auto">
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {
          guides?.map((item, idx) => {
            return <GuideCard data={item} key={idx}/>
          })
        }
      </div>

      
        {
          totalPages>1 ? (<Pagination 
            url = {path.pathname}
            totalPages = {totalPages}
            currentPage = {query.get('page') || 1} />) : null
        }

    </section>
  );
};

export default AllGuides;