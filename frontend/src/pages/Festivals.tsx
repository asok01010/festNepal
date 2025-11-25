import "../pages/css/festival.css";

const Festival = () => {
  return (
    <>
      <div>
        <section className="page-header">
          <h1>
            Nepal's <span className="highlight">Festival & Events</span>
          </h1>
          <p>
            Explore the vibrant tapestry of Nepal's cultural celebrations
            throughout the year
          </p>
        </section>

        <div className="container">
          <div className="filters-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search festivals by name, location, or description..."
                className="search-input"
              />
            </div>
            <div className="filter-controls">
              <select className="filter-select">
                <option>📅 Date</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Next 3 Months</option>
              </select>
              <select className="filter-select">
                <option>⚙️ All Categories</option>
                <option>Religious</option>
                <option>Cultural</option>
                <option>Traditional</option>
              </select>
            </div>
          </div>

          <div className="festivals-grid">
            <div className="festival-card">
              <div className="card-image festivalDashain">
                <span className="badge">Free</span>
              </div>
              <div className="card-content">
                <h3 className="festival-title">Dashain Festival Celebration</h3>
                <div className="festival-info">
                  <span className="info-item">📅 Oct 15-24, 2025</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">👥 500 Attending</span>
                </div>
                <button className="detail-btn">View Details</button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="festival-card">
              <div className="card-image festivalHoli">
                <span className="badge">Free</span>
              </div>
              <div className="card-content">
                <h3 className="festival-title">Holi Festival</h3>
                <div className="festival-info">
                  <span className="info-item">📅 Oct 15-24, 2025</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">👥 500 Attending</span>
                </div>
                <button className="detail-btn">View Details</button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="festival-card">
              <div className="card-image festival3">
                <span className="badge">Free</span>
              </div>
              <div className="card-content">
                <h3 className="festival-title">Tihar Festival</h3>
                <div className="festival-info">
                  <span className="info-item">📅 Oct 10-20, 2025</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">👥 500 Attending</span>
                </div>
                <button className="detail-btn">View Details</button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="festival-card">
              <div className="card-image festival4">
                <span className="badge">Free</span>
              </div>
              <div className="card-content">
                <h3 className="festival-title">Buddha Jayanti</h3>
                <div className="festival-info">
                  <span className="info-item">📅 Oct 15-24, 2025</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">👥 500 Attending</span>
                </div>
                <button className="detail-btn">View Details</button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="festival-card">
              <div className="card-image festival5">
                <span className="badge">Free</span>
              </div>
              <div className="card-content">
                <h3 className="festival-title">Indra Jatra</h3>
                <div className="festival-info">
                  <span className="info-item">📅 Oct 15-24, 2025</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">👥 500 Attending</span>
                </div>
                <button className="detail-btn">View Details</button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>

            <div className="festival-card">
              <div className="card-image festival6">
                <span className="badge">Free</span>
              </div>
              <div className="card-content">
                <h3 className="festival-title">Bisket Jatra</h3>
                <div className="festival-info">
                  <span className="info-item">📅 Oct 15-24, 2025</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">📍 Kathmandu Valley</span>
                </div>
                <div className="festival-info">
                  <span className="info-item">👥 500 Attending</span>
                </div>
                <button className="detail-btn">View Details</button>
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

export default Festival;
