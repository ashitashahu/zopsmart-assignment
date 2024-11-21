import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    let timer;

    if (color === "green") {
      timer = setTimeout(() => setColor("yellow"), 3000);
    } else if (color === "yellow") {
      timer = setTimeout(() => setColor("red"), 2000);
    } else if (color === "red") {
      timer = setTimeout(() => setColor("yellow"), 5000);
    } else if (color === "yellow") {
      timer = setTimeout(() => setColor("green"), 2000);
    }

    return () => clearTimeout(timer);
  }, [color]);

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: color,
        textAlign: "center",
      }}
    >
      bulb
    </div>
  );
};

export default TrafficLight;
