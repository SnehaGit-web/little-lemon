import { Link } from 'react-router-dom';

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    category: "Starters"
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$7.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
    category: "Starters"
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    category: "Desserts"
  }
];

function DishCard({ name, price, description, image }) {
  return (
    <div className="card">
      <img 
        src={image} 
        alt={name}
        className="dish-img"
      />
      <div className="card-body">
        <div className="card-header">
          <h3>{name}</h3>
          <span className="price">{price}</span>
        </div>
        <p className="text-small">{description}</p>
        <Link to="/order">
          <button className="btn-small">
            Order a delivery 🛵
          </button>
        </Link>
      </div>
    </div>
  );
}

function Specials() {
  return (
    <section className="highlights">
      <div className="section-header">
        <h2>This Week's Specials!</h2>
        <Link to="/menu">
          <button className="btn-secondary">
            Online Menu
          </button>
        </Link>
      </div>
      <div className="highlights-grid">
        {specialsData.map((dish) => (
          <DishCard
            key={dish.id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;