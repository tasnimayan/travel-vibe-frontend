
const CategoryCard = ({item}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  return (
    <div className="category-card">
      <img
        src={BASE_URL + item.image}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 w-full text-center p-1">
        <h1>{item.name}</h1>
      </div>
    </div>
);
};

export default CategoryCard;