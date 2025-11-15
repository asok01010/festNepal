// import { Home } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1>
          <span className="discover-nepal">Discover Nepal</span>
          <br />
          Festivals & Stays
        </h1>
        <p>
          Experience authentic Nepali culture through vibrant festivals
          <br />
          and comfortable, memorable stays
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search festivals,hotels,locations..."
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="stats">
          <div className="stat-item">
            <div className="stat-icon">🏨</div>
            <div className="stat-number">150+</div>
            <div className="stat-label">Hostels</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🎊</div>
            <div className="stat-number">200+</div>
            <div className="stat-label">Festivals</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Guests</div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <div>
            <h2>Featured Festivals</h2>
            <p>Immerse in traditional celebrations</p>
          </div>
          <a href="Festivals.html" className="view-all">
            View All Festivals →
          </a>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-image festival1"></div>
            <div className="card-content">
              <h3 className="card-title">Dashain Festival Celebration</h3>
              <div className="card-meta">Sep 15 - Oct 1</div>
              <div className="card-meta">⏰ 15 days celebration</div>
              <div className="card-footer">Kathmandu Valley</div>
              <button className="card-btn">Book Event</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image festival2"></div>
            <div className="card-content">
              <h3 className="card-title">Holi Festival of Colors</h3>
              <div className="card-meta">Mar 25, 2026</div>
              <div className="card-meta">⏰ Full day event</div>
              <div className="card-footer">Basantapur Square</div>
              <button className="card-btn">Book Event</button>
            </div>
          </div>
        </div>

        <div className="section-header">
          <div>
            <h2>Popular Hostels</h2>
            <p>Cozy, perfect location hostels</p>
          </div>
          <button className="view-all">View All Hostels →</button>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-image hostel1">
              <span className="badge">⚡ FEATURED</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Mountain View Lodge</h3>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span>5.0</span>
                <span className="reviews">(248 reviews)</span>
              </div>
              <div className="card-footer">Pokhara, Lakeside</div>
              <button className="card-btn secondary">Book Now</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image hostel2">
              <span className="badge">⚡ FEATURED</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Himalayan Haven Hostel</h3>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span>4.9</span>
                <span className="reviews">(189 reviews)</span>
              </div>
              <div className="card-footer">Thamel, Kathmandu</div>
              <button className="card-btn secondary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
