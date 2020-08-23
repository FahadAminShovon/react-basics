import React from "react";

function Navigation(props) {
    console.log("Navigation ",props);
  return <h1>{props.person.name} Liked your status</h1>;
}

export default Navigation;