
const CategoryCard = ({item}) => {
  return (
    <div className="category-card">
      <img
        src={item.image}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 w-full text-center p-1">
        <h1>{item.title}</h1>
      </div>
    </div>
);
};

export default CategoryCard;