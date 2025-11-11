import React, { useState } from "react";

export default function Admin() {
  const [acces, setaccess] = useState(false);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const accesuser = ["wasif", "ali", "khuzaima", "mustafan"];
  const accespassword = "cci";

  const checkaccess = async () => {
    if (accesuser.includes(user) && password === accespassword) {
      setaccess(true);
    } else {
      alert("INVALID USER");
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      {acces ? (
        <></>
      ) : (
        <>
          <h1>LOGIN TO GET ACCESS</h1>
          <input
            type="text"
            placeholder="USERNAME"
            value={user}
            onChange={(e) => {
              setuser(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="ENTER Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </>
      )}

      <p>IF NOT A USER ASK TO WASIF</p>

      <button onClick={checkaccess}>CHECK</button>
    </div>
  );
}
