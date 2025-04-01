import { useNavigate } from 'react-router-dom';
import axios from "../../axios";
import { useState } from "react";

const Log = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(formdata);
      const response = await axios.post("/seller/login", formdata, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log("login successful");
        navigate("/freeHome");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred during registration.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-mono text-center text-gary-500 mb-6">
        Login
      </h2>
      <form
        className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleLogin}
      >
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={setFormData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={setFormData.password}
            onChange={handleChange}
          />
        </div>
        <button className="form-button" type="submit">
          Login
        </button>
        <div>
          <p className="text-center">
            Forget Password ?
            <span>
              <a href="./reset-password">Change here</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Log;
