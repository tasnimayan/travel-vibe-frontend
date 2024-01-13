
const CategoryCard = ({item}) => {
  return (
    <div className="feature-card">
      <img
        src={item.image}
        alt=""
        className="feature-image rounded-lg"
      />
      <div className="bg-overlay rounded-lg"></div>
      <div className="feature-text">
        <h1>{item.title}</h1>
      </div>
    </div>
);
};

export default CategoryCard;