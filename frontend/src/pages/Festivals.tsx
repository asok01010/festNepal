import "../pages/CSS/festival.css";

import { useState, useEffect } from "react";
import "../pages/CSS/festival.css";
import SearchFilter from "../components/SearchFilter";
import Navbar from "@/components/Navbar";

interface Festival {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  imageClass: string;
}

const Festival = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [filteredFestivals, setFilteredFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/festivals")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch festivals");
        }
        return response.json();
      })
      .then((data) => {
        setFestivals(data);
        setFilteredFestivals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching festivals:", err);
        setError("Failed to load festivals. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = festivals.filter(
      (festival) =>
        festival.title.toLowerCase().includes(lowerQuery) ||
        festival.location.toLowerCase().includes(lowerQuery)
    );
    setFilteredFestivals(filtered);
  };

  return (
    <>
      <div>
        <Navbar />
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
            <SearchFilter
              onSearch={handleSearch}
              placeholder="Search festivals by name, location, or description..."
            >
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
            </SearchFilter>
          </div>

          <div className="festivals-grid">
            {filteredFestivals.length > 0 ? (
              filteredFestivals.map((festival) => (
                <div className="festival-card" key={festival.id}>
                  <div className={`card-image ${festival.imageClass}`}>
                    <span className="badge">Free</span>
                  </div>
                  <div className="card-content">
                    <h3 className="festival-title">{festival.title}</h3>
                    <div className="festival-info">
                      <span className="info-item">📅 {festival.date}</span>
                    </div>
                    <div className="festival-info">
                      <span className="info-item">📍 {festival.location}</span>
                    </div>
                    <div className="festival-info">
                      <span className="info-item">
                        👥 {festival.attendees} Attending
                      </span>
                    </div>
                    <button className="detail-btn">View Details</button>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No festivals found matching your search.</p>
            )}
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
