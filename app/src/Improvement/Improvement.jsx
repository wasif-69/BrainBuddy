import React, { useEffect, useState } from "react";
import "./Improvement.css";
import { ADDDocument } from "../Firebase/addData";

export default function ImprovementFlashcards({ data }) {
  

  const ADD=async()=>{
    try {
      function generateRandomId(length = 8) {
  // Generates a random alphanumeric string of specified length
  return Math.random().toString(36).substring(2, 2 + length);
}

// Example usage
    const randomId = generateRandomId();
    const Student_name=data.Student_name
    const Class=data.Class
    const Expected_BY_HIM=data.Expected_BY_HIM
    const Prediction_BY_AI=data.Prediction_BY_AI
    const Gender=data.Gender
    const Study_hour=data.Study_hour

    ADDDocument(randomId,Student_name,Class,Expected_BY_HIM,Prediction_BY_AI,Study_hour,Gender)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    ADD();
  },[])

  if (!data) return <p className="no-data">No data to show</p>;

  // If "Should" is null or empty, show positive message
  if (!data.Should) {
    return (
      <div className="improvement-container">
        <h1 className="answer good">🎉 Good work! No improvement needed</h1>
        <p className="prediction">
          <strong>Predicted by AI:</strong> {data.Prediction_BY_AI.toFixed(2)}
        </p>
      </div>
    );
  }

  const improvementKeys = [
    { key: "Hours_Studied", text: "Hours You Should Study" },
    { key: "Sleep_Hours", text: "Recommended Sleep Hours" },
    { key: "Physical_Activity", text: "Physical Activity" },
    { key: "Attendance", text: "Attendance Improvement" },
    { key: "RESOURCES_NEEDED", text: "Resources Needed" },
    { key: "Extracurricular", text: "Extracurricular Activities" },
  ];

  const flashcards = improvementKeys.map(({ key, text }) => {
    const value = data.Should[key];
    let displayValue;

    if (value == null) displayValue = "N/A";
    else if (typeof value === "number") displayValue = value.toFixed(2);
    else if (key === "RESOURCES_NEEDED") {
      displayValue =
        value === "LOW"
          ? "No additional resources needed ✅"
          : value === "MEDIUM"
          ? "Medium resources needed: past papers 📄"
          : "High resources needed: past papers & notes 📚";
    } else if (key === "Extracurricular") {
      displayValue =
        value === "YES"
          ? "Participate in sports / extracurricular activities ⚽"
          : "No extracurricular activities required";
    } else displayValue = value;

    return { key, text, value: displayValue };
  });

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  const card = flashcards[index];

    function getGrade(score) {
  if (score >= 90) return "A*";
  if (score >= 82) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  if (score >= 40) return "E";
  return "F";
}


  return (
    <div className="improvement-container">
      <h1 className="answer bad">⚠️ Needs Improvement</h1>
      <p className="prediction">
        <span>Predicted Grade: 3{getGrade(data.Prediction_BY_AI)}</span>

      </p>

      <div className="flashcard">
        <h2>{card.text}</h2>
        <p>{card.value}</p>
        <button onClick={handleNext} className="next-btn">
          Next 
        </button>
      </div>
    </div>
  );
}
