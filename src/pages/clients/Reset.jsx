import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useState } from "react";

const ResetPassword = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(formData);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/client/reset-password", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log("Password reset successful");
        navigate("/login");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      error.message = "Password reset failed";
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-mono text-center text-gray-500 mb-6">
        Reset Password
      </h2>
      <form
        className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleResetPassword}
      >
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="NewPassword">newPassword:</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-evenly">
          <button
            onClick={() => {
              window.location.href = "/register";
            }}
            className="form-button"
            type="submit"
          >
            Reset Password
          </button>
        </div>
        <link href="./reset-password" />
      </form>
    </div>
  );
};

export default ResetPassword;
