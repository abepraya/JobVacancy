import React from 'react';
import { Link } from "react-router-dom";
// import {  } from "react-bootstrap";

const HomeComponent = () =>{
    return(
        <section className="hero is-fullheight-with-navbar">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-1">
            Dream Board
          </h1>
          <section></section>
          <h2 className="subtitle is-3">
            Find and apply to your dream job
          </h2>
          <Link to="/JobComponent" className="button is-medium is-primary">
            Find a job
          </Link>
        </div>
      </div>
    </section>
    )
}

export default HomeComponent;