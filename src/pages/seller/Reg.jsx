import { useState } from "react";
import axios from "../../axios";

const Reg = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    businessName: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/seller/register", formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Registration successful");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      error.message = "Registration failed";
    }
  };

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Register
      </h2>
      <form
        onSubmit={handleRegister}
        className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="form-group ">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formdata.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="freelancerName">freelancerName:</label>
          <input
            name="freelancerName"
            type="text"
            id="freelancerName"
            value={formdata.freelancerName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            name="skill"
            id="skill"
            value={formdata.skill}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          type="submit"
          className="form-button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Reg;
