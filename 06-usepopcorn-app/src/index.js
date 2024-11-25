import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import App from "./App";
// import "./index.css";

function Test() {
  const [MovieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating} maxRating={8} />
      <p>The rating is {MovieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={4} />
    <StarRating size={24} color="red" maxRating={10} />
    <StarRating size={24} color="green" defaultRating={3} maxRating={7} />
    <Test />
  </React.StrictMode>
);
