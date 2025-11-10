import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckImprovement.css";
import improvementImage from "../assets/improvement.png"; // Add your image in src/assets/

export default function CheckImprovement() {
  const navigate = useNavigate();

  const goToInput = () => {
    navigate("/input");
  };

  return (
    <div className="check-container">
      <div className="check-content">
        <div className="text-section">
          <h1>Check Your Predicted Grades</h1>
          <p>Enter your data and see your predicted grades along with personalized improvement suggestions.</p>
          <button onClick={goToInput}>Go to Input</button>
        </div>
        <div className="image-section">
          <img src={improvementImage} alt="Improvement illustration" />
        </div>
      </div>
    </div>
  );
}
