import React, { useEffect, useState } from "react";

function StudentForm() {

  // State for storing form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  // State for storing submitted data
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  // useEffect executes when submitted changes
  useEffect(() => {
    if (submitted) {
      console.log("Form Submitted");
      console.log(formData);
    }
  }, [submitted, formData]);

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="Java Full Stack">Java Full Stack</option>
          <option value="Python">Python</option>
          <option value="React JS">React JS</option>
        </select>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      {submitted && (
        <div>
          <h3>Submitted Student Details</h3>

          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>Course: {formData.course}</p>
        </div>
      )}
    </div>
  );
}

export default StudentForm;