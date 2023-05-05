import React, { useState } from "react";
import styles from "./login.module.css";
import Card from "../Card/Card";
import { userdata } from "../../utils/userdata";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    const currentUser = userdata.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className={styles.error_msg}>{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.subtitle}>
        Sign in using
      </p>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.inputs_container}>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            id="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            id="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
      <div className={styles.link_container}>
        <div>
        <input type="checkbox" id="demoCheckbox" name="checkbox" value="1" />
          <label className={styles.check} htmlFor="demoCheckbox"> Remember me</label>
        </div>
        <Link to="" className={styles.small}>
          Reset Password?
        </Link>
      </div>
        <input type="submit" value="Continue" className={styles.login_button} />
      <p>username: user1 & password: password1</p>
      </form>
    </Card>
  );
};

export default Login;