import { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const SearchPage = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/services")
      .then((response) => {
        setServices(response.data.data);
        setFilteredServices(response.data.data);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  useEffect(() => {
    let filtered = services;

    // 🔍 Search by freelancer name or skill
    if (searchQuery) {
      filtered = filtered.filter((service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 💰 Filter by price
    if (maxPrice) {
      filtered = filtered.filter((service) => service.price <= maxPrice);
    }

    // ⭐ Filter by rating
    if (minRating) {
      filtered = filtered.filter((service) => service.rating >= minRating);
    }

    // 🔄 Sorting logic
    if (sortOption === "price_low_high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price_high_low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating_high_low") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    setFilteredServices(filtered);
  }, [searchQuery, maxPrice, minRating, sortOption, services]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-indigo-500 p-4">
        🔍 Search Freelancers
      </h1>

      {/* Filters & Search */}
      <div className="flex flex-wrap gap-4 justify-center p-4">
        <input
          type="text"
          placeholder="Search by name or skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-64"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-40"
        />
        <input
          type="number"
          placeholder="Min Rating (3.1-5)"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="border p-2 rounded w-40"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded w-52"
        >
          <option value="">Sort By</option>
          <option value="price_low_high">💰 Price: Low to High</option>
          <option value="price_high_low">💰 Price: High to Low</option>
          <option value="rating_high_low">⭐ Rating: High to Low</option>
        </select>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {filteredServices.map((service) => (
          <div className="p-6 bg-white shadow-md rounded-lg" key={service._id}>
            <img
              src={service.image}
              className="w-full h-40 rounded-lg cursor-pointer"
              alt={service.title}
            />
            <h2 className="text-xl font-bold mt-2">{service.title}</h2>
            <p className="text-gray-600 font-semibold">
              💰 Price: $ {service.price}
            </p>
            <p className="text-yellow-500 font-semibold">
              ⭐ Ratings: {service.rating}
            </p>
            <button>
              <a
                href={`/services/${service._id}`}
                className="text-blue-500 font-semibold"
              >
                View Details
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
