import React from "react";

export default props => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p> No match for {props.location.pathname}</p>
    </div>
  );
};
