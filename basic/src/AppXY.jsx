import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [y, setY] = useState(0);

  const handleMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    // 수평으로만 이동가능한 경우
    // setPosition((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div className="container" onPointerMove={handleMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px )` }}
      ></div>
    </div>
  );
}
