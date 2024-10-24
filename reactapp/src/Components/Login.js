import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as useNavigator, Link } from "react-router-dom";
function Login() {
  const history = useNavigator();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("localhot://3000", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "not exist") {
            alert("User Have not Sign Up");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter e-mail"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Password"
        />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Login;
