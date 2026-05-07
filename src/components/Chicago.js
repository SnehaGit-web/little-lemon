
function Chicago() {
  return (
    <section className="about">
      <div className="about-grid">
        <div className="about-content">
          <h2>A little bit about us!</h2>
          <p>
            Little Lemon is a charming neighbourhood bistro 
            that serves simple food and classic cocktails in 
            a lively but casual environment. The restaurant 
            was opened by two Italian brothers, Mario and 
            Adrian, who moved to the United States to pursue 
            their shared dream of owning a restaurant.
          </p>
          <p>
            To craft the menu, Mario relies on his family 
            recipes and his grandmother's culinary expertise 
            to ensure that every dish is as authentic as 
            possible.
          </p>
        </div>
        <div className="about-images">
          <img 
            src="/about-1.jpg"
            alt="Little Lemon restaurant interior" 
            className="about-img"
          />
          <img 
            src="/about-2.jpg"
            alt="Mario and Adrian cooking" 
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;