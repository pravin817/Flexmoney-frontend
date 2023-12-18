// src/components/Form.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    fee: "500",
    batch: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear validation errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (
      isNaN(formData.age) ||
      +formData.age < 18 ||
      +formData.age > 65
    ) {
      newErrors.age = "Age must be between 18 and 65";
    }
    if (!formData.batch.trim()) {
      newErrors.batch = "Batch is required";
    }

    // Update errors state
    setErrors(newErrors);

    // If there are no errors, you can proceed with submitting the form
    if (Object.keys(newErrors).length === 0) {
      // TODO: Add logic to send data to the backend
      console.log("Form Data:", formData);

      const User = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        age: formData.age,
        fee: formData.fee,
        batch: formData.batch,
      };

      axios
        .post("http://localhost:5000/user", User)
        .then((res) => {
          console.log("User added successfully");
          navigate("/");
        })
        .catch((error) => {
          console.log({ message: error.message });
        });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-600"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.age ? "border-red-500" : ""
            }`}
            required
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="fee"
            className="block text-sm font-medium text-gray-600"
          >
            Fee
          </label>
          <input
            type="text"
            id="fee"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            disabled
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="batch"
            className="block text-sm font-medium text-gray-600"
          >
            Batch
          </label>
          <select
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.batch ? "border-red-500" : ""
            }`}
            required
          >
            <option value="">Select Batch</option>
            <option value="6 - 7 AM">6 - 7 AM</option>
            <option value="7 - 8 AM">7 - 8 AM</option>
            <option value="8 - 9 AM">8 - 9 AM</option>
            <option value="5 - 6 PM">5 - 6 PM</option>
          </select>
          {errors.batch && (
            <p className="text-red-500 text-sm">{errors.batch}</p>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            // disabled={Object.keys(errors).length > 0}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
