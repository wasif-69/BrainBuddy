import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/confiq";
import "./admin.css"; // Import the CSS file

export default function Admin() {
  const [acces, setaccess] = useState(false);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);

  const accesuser = ["wasif", "ali", "khuzaima", "mustafan"];
  const accespassword = "cci";

  const checkaccess = async () => {
    if (accesuser.includes(user) && password === accespassword) {
      setaccess(true);
      alert("LOGIN SUCCESS");
    } else {
      alert("INVALID USER");
    }
  };

  useEffect(() => {
    const ReadDocument = async () => {
      const ref = collection(db, "Student");
      const snapshot = await getDocs(ref);

      const alldocs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setdata(alldocs);
    };

    ReadDocument();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>

      {acces ? (
        <>
          <h2 className="total-users">Total Users: {data.length}</h2>

          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Actual Grades BY AI</th>
                <th>Predicted Grades BY Student</th>
                <th>Study Hours</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {data.map((doc, index) => (
                <tr key={doc.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                  <td>{doc.id}</td>
                  <td>{doc.Student_name || doc.name || "N/A"}</td>
                  <td>{doc.gender || "N/A"}</td>
                  <td>{doc.actual_Grades || "N/A"}</td>
                  <td>{doc.predicted_grades || "N/A"}</td>
                  <td>{doc.study_hour || "N/A"}</td>
                  <td>{doc.class_std || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="login-container">
          <h2>LOGIN TO GET ACCESS</h2>
          <input
            type="text"
            placeholder="USERNAME"
            value={user}
            onChange={(e) => setuser(e.target.value)}
          />
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p>IF NOT A USER ASK TO WASIF</p>
          <button onClick={checkaccess}>CHECK</button>
        </div>
      )}
    </div>
  );
}
