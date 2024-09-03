import React, { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    password_confirm: "",
    country: "",
    file: null,
    gender: "Male",
    acceptTerms: false,
  });

  const [error, setError] = useState(""); // State for error messages

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox and other inputs
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Ensure all required fields are filled
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Email address is invalid!");
      return;
    }

    // Password validation: 1 lowercase letter, 1 uppercase letter, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{1,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 special character."
      );
      return;
    }

    // Password confirm validation
    if (formData.password !== formData.password_confirm) {
      setError("Passwords do not match!");
      return;
    }

    // Check if terms and conditions are accepted
    if (!formData.acceptTerms) {
      setError("You must accept the terms and conditions to proceed.");
      return;
    }

    // If everything is fine, submit the form
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>first letter must be uppercase</span>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>1 lowercase letter, 1 uppercase letter, 1 special character</span>
      </div>
      <div>
        <label>Password Confirm:</label>
        <input
          type="password"
          name="password_confirm"
          value={formData.password_confirm}
          onChange={handleChange}
        />
        <span>must match with password</span>
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Picture:</label>
        <input type="file" name="file" onChange={handleFileChange} />
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <label forename="gen1">Mail</label>
          <input
            id="gen1"
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
          />
        </div>
        <div>
          <label forename="gen2">Female</label>
          <input
            id="gen2"
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
          />
        </div>
      </div>
      <div>
        <label>Terms and conditions:</label>
        <input
          type="checkbox"
          name="acceptTerms"
          onChange={handleChange}
          checked={formData.acceptTerms} // Compare with boolean value
        />
        <span>acceptTerms field must be true</span>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error if any */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
