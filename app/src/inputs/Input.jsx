import React, { useState } from "react";
import Improvement from "../Improvement/Improvement";
import "./input.css"; // Import the CSS

export default function Input() {
  const [formdata, setFormdata] = useState({
    Hour_studied: "",
    Attendance_Percentage: "",
    parent: "",
    Resources: "",
    Extracurricular: false,
    sleep_hour: "",
    Motivational: "",
    Internet: false,
    Teacher: "",
    physical_activity: "",
    Disability: false,
    gender: "",
    sub1: "90",
    sub2: "90",
    sub3: "90",
  });

  const [data, setData] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...formdata,
    Hour_studied: parseInt(formdata.Hour_studied || 0),
    Attendance_Percentage: parseInt(formdata.Attendance_Percentage || 0),
    sleep_hour: parseInt(formdata.sleep_hour || 0),
    physical_activity: parseInt(formdata.physical_activity || 0),
    sub1: parseInt(formdata.sub1 || 0),
    sub2: parseInt(formdata.sub2 || 0),
    sub3: parseInt(formdata.sub3 || 0),
    Extracurricular: !!formdata.Extracurricular,
    Internet: !!formdata.Internet,
    Disability: !!formdata.Disability
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/myapp/add/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const text = await response.text(); // read body once
    let result;
    try {
      result = JSON.parse(text); // try parsing JSON
    } catch {
      console.error("Server returned non-JSON response:", text);
      return;
    }

    if (response.ok) {
      setData(result);
      console.log(result);
    } else {
      console.error("Server error:", result);
    }
  } catch (err) {
    console.error("Network error:", err);
  }
};


  return (
    <>
      {data ? (
        <Improvement data={data} />
      ) : (
        <div className="form-container">
          <h1>BrainBuddy - Student Activity Input</h1>
          <form className="student-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Hour Studied</label>
              <input
                type="number"
                name="Hour_studied"
                value={formdata.Hour_studied}
                onChange={handleChange}
                placeholder="Enter hours studied"
                required
              />
            </div>

            <div className="form-group">
              <label>Attendance Percentage</label>
              <input
                type="number"
                name="Attendance_Percentage"
                value={formdata.Attendance_Percentage}
                onChange={handleChange}
                placeholder="Enter attendance %"
                required
              />
            </div>

            <div className="form-group">
              <label>Parental Involvement</label>
              <div className="radio-group">
                {["LOW", "Medium", "High"].map((val) => (
                  <label key={val}>
                    <input
                      type="radio"
                      name="parent"
                      value={val}
                      checked={formdata.parent === val}
                      onChange={handleChange}
                      required
                    />
                    {val}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Access to Resources</label>
              <div className="radio-group">
                {["LOW", "Medium", "High"].map((val) => (
                  <label key={val}>
                    <input
                      type="radio"
                      name="Resources"
                      value={val}
                      checked={formdata.Resources === val}
                      onChange={handleChange}
                      required
                    />
                    {val}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="Extracurricular"
                checked={formdata.Extracurricular}
                onChange={handleChange}
              />
              <label>Participates in Extracurricular Activities</label>
            </div>

            <div className="form-group">
              <label>Sleep Hours</label>
              <input
                type="number"
                name="sleep_hour"
                value={formdata.sleep_hour}
                onChange={handleChange}
                placeholder="Enter sleep hours"
                required
              />
            </div>

            <div className="form-group">
              <label>Motivational Level</label>
              <div className="radio-group">
                {["LOW", "Medium", "High"].map((val) => (
                  <label key={val}>
                    <input
                      type="radio"
                      name="Motivational"
                      value={val}
                      checked={formdata.Motivational === val}
                      onChange={handleChange}
                      required
                    />
                    {val}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="Internet"
                checked={formdata.Internet}
                onChange={handleChange}
              />
              <label>Has Internet Access</label>
            </div>

            <div className="form-group">
              <label>Teacher Quality</label>
              <div className="radio-group">
                {["LOW", "Medium", "High"].map((val) => (
                  <label key={val}>
                    <input
                      type="radio"
                      name="Teacher"
                      value={val}
                      checked={formdata.Teacher === val}
                      onChange={handleChange}
                      required
                    />
                    {val}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Physical Activity (Per Weak )</label>
              <input
                type="number"
                name="physical_activity"
                value={formdata.physical_activity}
                onChange={handleChange}
                placeholder="Enter activity level"
                required
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="Disability"
                checked={formdata.Disability}
                onChange={handleChange}
              />
              <label>Physical Disability</label>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                {["male", "female"].map((val) => (
                  <label key={val}>
                    <input
                      type="radio"
                      name="gender"
                      value={val}
                      checked={formdata.gender === val}
                      onChange={handleChange}
                      required
                    />
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Predicted Grades</label>
              {["sub1", "sub2", "sub3"].map((sub, idx) => (
              
                <>
                <br />
                <h1>Subject {sub.slice(3)}</h1>
                <select
                  key={idx}
                  name={sub}
                  value={formdata[sub]}
                  onChange={handleChange}
                >
                  <option value="90">A*</option>
                  <option value="82">A</option>
                  <option value="70">B</option>
                  <option value="60">C</option>
                  <option value="50">D</option>
                  <option value="40">E</option>
                  <option value="30">U</option>
                </select>
                </>
              ))}
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
