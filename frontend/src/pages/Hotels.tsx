import "../pages/css/hotel.css";
import { FaHotel } from "react-icons/fa";
const Hotels = () => {
  return (
    <>
      <div>
        <section className="page-header">
          <h1>
            Nepal's <span className="highlight">Hotels & Lodges</span>
          </h1>
          <p> Comfortable stays, wherever your journey takes you</p>
        </section>

        <div className="container">
          <div className="filters-section">
            <div className="search-filter-row">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search hotels by name, or location..."
                  className="search-input"
                />
              </div>
              <div className="filter-controls">
                <select className="filter-select">
                  <option>📍 All Locations</option>
                  <option>Kathmandu Valley</option>
                  <option>Pokhara</option>
                  <option>Lumbini</option>
                  <option>Chitwan</option>
                </select>
                <select className="filter-select">
                  <option>💰 Price Range</option>
                  <option>Under NPR 1000</option>
                  <option>NPR 1000 - 2000</option>
                  <option>NPR 2000 - 5000</option>
                  <option>Above NPR 5000</option>
                </select>
              </div>
            </div>
          </div>

          <div className="hotels-grid">
            <div className="hotel-card">
              <div className="card-image hotel1">
                <span className="badge exclusive">NPR 1500/night</span>
              </div>
              <div className="card-content">
                <h3 className="hotel-title">Mountain View Lodge</h3>
                <div className="rating">
                  <span className="stars">⭐</span>
                  <span className="rating-number">4.5</span>
                  <span className="reviews">(320 reviews)</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">👥 Capacity: 30 guests</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="hotel-card">
              <div className="card-image himalayanHotel">
                <span className="badge exclusive">NPR 1250/night</span>
              </div>
              <div className="card-content">
                <h3 className="hotel-title">Himalayan Haven Hostel</h3>
                <div className="rating">
                  <span className="stars">⭐</span>
                  <span className="rating-number">4.5</span>
                  <span className="reviews">(280 reviews)</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">👥 Capacity: 15 guests</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="hotel-card">
              <div className="card-image hotel3">
                <span className="badge exclusive">NPR 850/night</span>
              </div>
              <div className="card-content">
                <h3 className="hotel-title">Thamel Backpackers</h3>
                <div className="rating">
                  <span className="stars">⭐</span>
                  <span className="rating-number">4.8</span>
                  <span className="reviews">(450 reviews)</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">👥 Capacity: 15 guests</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="hotel-card">
              <div className="card-image hotel4">
                <span className="badge exclusive">NPR 1450/night</span>
              </div>
              <div className="card-content">
                <h3 className="hotel-title">Lakeside Retreat</h3>
                <div className="rating">
                  <span className="stars">⭐</span>
                  <span className="rating-number">4.6</span>
                  <span className="reviews">(350 reviews)</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">👥 Capacity: 50 guests</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="hotel-card">
              <div className="card-image hotel5">
                <span className="badge exclusive">NPR 1750/night</span>
              </div>
              <div className="card-content">
                <h3 className="hotel-title">Peaceful Garden Lodge</h3>
                <div className="rating">
                  <span className="stars">⭐</span>
                  <span className="rating-number">4.5</span>
                  <span className="reviews">(280 reviews)</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">👥 Capacity: 30 guests</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="hotel-card">
              <div className="card-image hotel6">
                <span className="badge exclusive">NPR 1500/night</span>
              </div>
              <div className="card-content">
                <h3 className="hotel-title">Everest View Inn</h3>
                <div className="rating">
                  <span className="stars">⭐</span>
                  <span className="rating-number">4.8</span>
                  <span className="reviews">(500 reviews)</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="hotel-info">
                  <span className="info-item">👥 Capacity: 40 guests</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>

          <div className="load-more-section">
            <button className="load-more-btn">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
