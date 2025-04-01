import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios";
import { FaBell, FaEnvelope, FaHeart } from "react-icons/fa";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/services/${id}`)
      .then((response) => setService(response.data.data))
      .catch((error) =>
        console.error("Error fetching service details:", error)
      );
  }, [id]);

  if (!service) {
    return <p className="text-center text-gray-600 text-lg">Loading...</p>;
  }

  return (
    <div className="">
      <div className="">
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">
            freelancer<span className="text-green-500">.</span>
          </h1>
          <input
            type="text"
            placeholder="What service are you looking for today?"
            className="w-1/2 p-2 border rounded-md"
          />
          <div className="flex space-x-6 items-center">
            <FaBell className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700" />
            <FaEnvelope className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700" />
            <FaHeart className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600">Orders</button>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </nav>
        <div className="p-6 max-w-4xl ">
          <h1 className="text-3xl font-bold text-center text-amber-600 ">
            {service.title}
          </h1>
          <div className="flex justify-center mt-6">
            <img
              src={service.image}
              alt={service.title}
              className="w-96 h-60 rounded-lg shadow-md"
            />
          </div>
          <div className="mt-6 p-4 ">
            <p className="text-gray-700">{service.description}</p>
            <p className="text-gray-600 font-semibold mt-2">
              Available: {service.availability}
            </p>
            <p className="text-gray-600 font-semibold mt-2">
              Price: $ {service.price}
            </p>
            <p className="text-gray-600 font-semibold mt-2">
              Ratings: ⭐ {service.rating}
            </p>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Continue
            </button>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-3xl ">
          <h1 className="text-3xl font-bold  mb-6">About this gig</h1>
          <p className="text-lg mb-4">
            Are you in search of a dependable{" "}
            <strong>MERN Stack Developer</strong>? Your dream project is just a
            click away!
          </p>
          <p className="text-lg mb-6">
            With more than <strong>5 years of experience</strong>, I specialize
            in crafting websites using React, Node.js, and Tailwind.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Expertise Encompasses:
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>
              <strong>Harnessing the power of Vanilla JavaScript</strong> (ES5,
              ES6, ES7).
            </li>
            <li>
              <strong>Proficiency in React.js</strong>.
            </li>
            <li>
              <strong>Adept in Node.js, EJS, and Express.js</strong>.
            </li>
            <li>
              <strong>Mastery over MongoDB</strong> and SQL.
            </li>
          </ul>
        </div>
          </div>
          <div>
              
          </div>
    </div>
  );
};

export default ServiceDetails;
