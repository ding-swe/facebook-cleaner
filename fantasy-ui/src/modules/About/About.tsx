import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container">
      <div className="left-card">
        <div>
          <h1> About </h1>
          <hr></hr>
          <Link to="/">Back to Home </Link>
        </div>
      </div>
    </div>
  );
}
