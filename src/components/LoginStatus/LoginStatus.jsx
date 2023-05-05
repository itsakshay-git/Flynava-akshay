import React from "react";
import styles from "./LoginStatus.module.css";

const LoginStatus = ({ setIsLoggedIn }) => {
  return (
    <>
      <h1 className={styles.title}>You are now logged in!</h1>
      <button className={styles.back_button} onClick={() => setIsLoggedIn(false)}>
        Go Back
      </button>
    </>
  );
};

export default LoginStatus;