import "../pages/CSS/hotel.css";
import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import Navbar from "@/components/Navbar";

const HOTELS_DATA = [
    {
        id: 1,
        name: "Mountain View Lodge",
        price: 1500,
        rating: 4.5,
        reviews: 320,
        location: "Kathmandu Valley",
        capacity: 30,
        imageClass: "hotel1",
    },
    {
        id: 2,
        name: "Himalayan Haven Hostel",
        price: 1250,
        rating: 4.5,
        reviews: 280,
        location: "Kathmandu Valley",
        capacity: 15,
        imageClass: "himalayanHotel",
    },
    {
        id: 3,
        name: "Thamel Backpackers",
        price: 850,
        rating: 4.8,
        reviews: 450,
        location: "Kathmandu Valley",
        capacity: 15,
        imageClass: "hotel3",
    },
    {
        id: 4,
        name: "Lakeside Retreat",
        price: 1450,
        rating: 4.6,
        reviews: 350,
        location: "Kathmandu Valley",
        capacity: 50,
        imageClass: "hotel4",
    },
    {
        id: 5,
        name: "Peaceful Garden Lodge",
        price: 1750,
        rating: 4.5,
        reviews: 280,
        location: "Kathmandu Valley",
        capacity: 30,
        imageClass: "hotel5",
    },
    {
        id: 6,
        name: "Everest View Inn",
        price: 1500,
        rating: 4.8,
        reviews: 500,
        location: "Kathmandu Valley",
        capacity: 40,
        imageClass: "hotel6",
    },
];

const Hotels = () => {
    const [filteredHotels, setFilteredHotels] = useState(HOTELS_DATA);

    const handleSearch = (query: string) => {
        const lowerQuery = query.toLowerCase();
        const filtered = HOTELS_DATA.filter(
            (hotel) =>
                hotel.name.toLowerCase().includes(lowerQuery) ||
                hotel.location.toLowerCase().includes(lowerQuery)
        );
        setFilteredHotels(filtered);
    };

    return (
        <>
            <div>
                <Navbar />
                <section className="page-header">
                    <h1>
                        Nepal's <span className="highlight">Hotels & Lodges</span>
                    </h1>
                    <p> Comfortable stays, wherever your journey takes you</p>
                </section>

                <div className="container">
                    <div className="filters-section">
                        <SearchFilter
                            onSearch={handleSearch}
                            placeholder="Search hotels by name, or location..."
                        >
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
                        </SearchFilter>
                    </div>

                    <div className="hotels-grid">
                        {filteredHotels.length > 0 ? (
                            filteredHotels.map((hotel) => (
                                <div className="hotel-card" key={hotel.id}>
                                    <div className={`card-image ${hotel.imageClass}`}>
                                        <span className="badge exclusive">
                                            NPR {hotel.price}/night
                                        </span>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="hotel-title">{hotel.name}</h3>
                                        <div className="rating">
                                            <span className="stars">⭐</span>
                                            <span className="rating-number">{hotel.rating}</span>
                                            <span className="reviews">({hotel.reviews} reviews)</span>
                                        </div>
                                        <div className="hotel-info">
                                            <span className="info-item">📍 {hotel.location}</span>
                                        </div>
                                        <div className="hotel-info">
                                            <span className="info-item">
                                                👥 Capacity: {hotel.capacity} guests
                                            </span>
                                        </div>
                                        <button className="book-btn">Book Now</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hotels found matching your search.</p>
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

export default Hotels;
