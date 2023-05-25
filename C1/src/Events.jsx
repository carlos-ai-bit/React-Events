// import React from "react";
// import ReactDOM from "react-dom/client";

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   };

//   return <button onClick={shoot}>Take the shot!</button>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);

// export default Football;

import React from "react";
import ReactDOM from "react-dom/client";
function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
export default Football;
