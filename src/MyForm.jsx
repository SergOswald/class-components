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
    gender: "Mail",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Form data:', formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Email address is invalid!");
      return;
    }
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
        <label>Gender:</label>
        <div>
          <label forname="gen1">Mail</label>
          <input
            id="gen1"
            type="radio"
            name="mail"
            checked
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label forname="gen2">Femail</label>
          <input
            id="gen2"
            type="radio"
            name="mail"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
