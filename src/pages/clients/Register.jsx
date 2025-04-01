import { useState } from "react";
import axios from "../../axios";

const Register = () => {
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
      const response = await axios.post("/client/register", formdata, {
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formdata.name}
            onChange={handleChange}
          />
        </div>
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
          <label htmlFor="businessName">businessName:</label>
          <input
            name="businessName"
            type="text"
            id="businessName"
            value={formdata.businessName}
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

export default Register;
