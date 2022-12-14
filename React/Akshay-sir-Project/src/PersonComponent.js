import React from "react";

function PersonComponent(props) {
  return (
    <div style={{ border: "2px solid red", margin: '20px' }}>
      Name: {props.firstName} {props.lastName}
      <br />
      Age: {props.age}
      <br />
      Hometown: {props.hometown}
    </div>
  );
}

export default PersonComponent;
