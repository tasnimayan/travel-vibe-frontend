
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = (props) => {
  let {currentPage, url, totalPages} = props
  currentPage = parseInt(currentPage)
  
  return (
    <div className="flex justify-center mt-10 space-x-2">

      <a href={currentPage > 2?`${url}?page=${currentPage-1}`:`${url}`}
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none">
          <FaChevronLeft className='inline-block'/>
      </a>

      <a href={`${url}?page=${currentPage}`}
          className="ring ring-primary bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none">{currentPage}
      </a>
      
      {/* Next of current Page */}
      {
        currentPage+1 < totalPages?(
          <a href={`${url}?page=${currentPage+1}`}
              className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none">{currentPage+1}
          </a>
        ): null
      }

      {/* Last Page Button */}
      {
      currentPage < totalPages ? (
        <>
          <span className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 rounded-lg focus:outline-none">...</span>
          <a href={`${url}?page=${totalPages}`}
              className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none">{totalPages}
          </a>
        </>
      ) : null
      }
      

      <a href={`${url}?page=${currentPage+1}`}
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none">
          <FaChevronRight className='inline-block'/>
      </a>
    </div>
  );
};

export default Pagination;