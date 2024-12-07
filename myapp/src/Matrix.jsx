import React, { useState } from "react";
import "./Matrix.css"; // Create a CSS file for styling the grid

const Matrix = () => {
  const initialState = Array(9).fill("white");
  const [boxColors, setBoxColors] = useState(initialState);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (clickOrder.includes(index)) return;

    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    const newBoxColors = [...boxColors];
    newBoxColors[index] = "green";
    setBoxColors(newBoxColors);

    // If this is the last box clicked
    if (newClickOrder.length === 9) {
      setTimeout(() => changeToOrange(newClickOrder), 500);
    }
  };

  const changeToOrange = (order) => {
    let currentColors = [...boxColors];

    order.forEach((index, i) => {
      setTimeout(() => {
        currentColors[index] = "orange";
        setBoxColors([...currentColors]);
      }, i * 500);
    });
  };

  return (
    <div className="matrix-container">
      {boxColors.map((color, index) => (
        <div
          key={index}
          className="matrix-box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;