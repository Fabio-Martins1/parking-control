import styles from "./home.module.css"
import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
  return (
      <div className={styles.container}>
        <div className={styles.home_container}>
          <h1>Home</h1>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
  )
}