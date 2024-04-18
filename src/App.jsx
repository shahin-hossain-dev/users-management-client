import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <h1>User Management System</h1>
      <h3>Total User: {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="submit" value="Submit" />
      </form>

      {users.map((user) => (
        <p key={user.id}>
          {user.id}: {user.name}: {user.email}
        </p>
      ))}
    </>
  );
}

export default App;
