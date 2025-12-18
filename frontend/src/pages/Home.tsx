import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "@/App.css";
import { useState } from "react";
import SearchFilter from "../components/SearchFilter";

const FEATURED_FESTIVALS = [
  {
    id: "dashain",
    title: "Dashain Festival Celebration",
    date: "Sep 15 - Oct 1",
    duration: "15 days celebration",
    location: "Kathmandu Valley",
    imageClass: "festival1",
  },
  {
    id: "holi",
    title: "Holi Festival of Colors",
    date: "Mar 25, 2026",
    duration: "Full day event",
    location: "Basantapur Square",
    imageClass: "festival2",
  },
];

const POPULAR_HOSTELS = [
  {
    id: "mountain-view",
    title: "Mountain View Lodge",
    rating: 5.0,
    reviews: 248,
    location: "Pokhara, Lakeside",
    imageClass: "hostel1",
  },
  {
    id: "himalayan-haven",
    title: "Himalayan Haven Hostel",
    rating: 4.9,
    reviews: 189,
    location: "Thamel, Kathmandu",
    imageClass: "hostel2",
  },
];

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [filteredFestivals, setFilteredFestivals] =
    useState(FEATURED_FESTIVALS);
  const [filteredHostels, setFilteredHostels] = useState(POPULAR_HOSTELS);

  // Handle event booking with session check
  const handleBookEvent = (eventSlug: string) => {
    if (!isAuthenticated) {
      localStorage.setItem("returnUrl", `/event/${eventSlug}`);
      navigate("/login");
      return;
    }
    navigate(`/event/${eventSlug}`);
  };

  // Handle hostel booking with session check
  const handleBookHostel = (hostelSlug: string) => {
    if (!isAuthenticated) {
      localStorage.setItem("returnUrl", `/hostel/${hostelSlug}`);
      navigate("/login");
      return;
    }
    navigate(`/hostel/${hostelSlug}`);
  };

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setFilteredFestivals(
      FEATURED_FESTIVALS.filter(
        (f) =>
          f.title.toLowerCase().includes(lowerQuery) ||
          f.location.toLowerCase().includes(lowerQuery)
      )
    );
    setFilteredHostels(
      POPULAR_HOSTELS.filter(
        (h) =>
          h.title.toLowerCase().includes(lowerQuery) ||
          h.location.toLowerCase().includes(lowerQuery)
      )
    );
  };

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

        <div className="search-bar-container" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <SearchFilter
            onSearch={handleSearch}
            placeholder="Search festivals, hotels, locations..."
          />
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
        {/* FEATURED FESTIVALS */}
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
          {filteredFestivals.length > 0 ? (
            filteredFestivals.map((festival) => (
              <div className="card" key={festival.id}>
                <div className={`card-image ${festival.imageClass}`}></div>
                <div className="card-content">
                  <h3 className="card-title">{festival.title}</h3>
                  <div className="card-meta">{festival.date}</div>
                  <div className="card-meta">⏰ {festival.duration}</div>
                  <div className="card-footer">{festival.location}</div>

                  <button
                    className="card-btn"
                    onClick={() => handleBookEvent(festival.id)}
                  >
                    Book Event
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No featured festivals match your search.</p>
          )}
        </div>

        {/* HOSTELS */}
        <div className="section-header">
          <div>
            <h2>Popular Hostels</h2>
            <p>Cozy, perfect location hostels</p>
          </div>
          <button className="view-all">View All Hostels →</button>
        </div>

        <div className="cards">
          {filteredHostels.length > 0 ? (
            filteredHostels.map((hostel) => (
              <div className="card" key={hostel.id}>
                <div className={`card-image ${hostel.imageClass}`}>
                  <span className="badge">⚡ FEATURED</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{hostel.title}</h3>
                  <div className="rating">
                    <span className="stars">★★★★★</span>
                    <span>{hostel.rating}</span>
                    <span className="reviews">({hostel.reviews} reviews)</span>
                  </div>
                  <div className="card-footer">{hostel.location}</div>

                  <button
                    className="card-btn secondary"
                    onClick={() => handleBookHostel(hostel.id)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No popular hostels match your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
