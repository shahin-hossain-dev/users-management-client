import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <>
      <h1>User Management System</h1>
      <h3>Total User: {users.length}</h3>
    </>
  );
}

export default App;
