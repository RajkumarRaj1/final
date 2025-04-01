import { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const servicePost = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/services")
      .then((response) => setFormData(response.data.data))

      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div className=" sm:grid-cols-gap-4 p-10">
      <h1 className="text-3xl font-bold text-center text-amber-500 p-4">
        Service Post
      </h1>
      <div className="grid grid-cols-4 gap-4 p-10 ">
        {formData?.map((service) => (
          <div className=" p-6 rounded-lg " key={service._id} >
            <img  src={service.image}className="w-full h-50 rounded-lg cursor-pointer" />
            <h2 className="text-xl font-bold">{service.title}</h2>
            {/* <p className="text-gray-900 font-semibold ">
              {service.description}
            </p> */}
            <p className="text-gray-600 font-semibold">Available:{service.availability}</p>
            <p className="text-emerald-500 font-semibold">Price:$ {service.price}</p>
            <p className="text-orange-500 font-semibold ">Ratings: {service.rating}</p>
            <button>
              <a href={`/services/${service._id}`} className="text-blue-500 font-semibold">
                View Details
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default servicePost;
