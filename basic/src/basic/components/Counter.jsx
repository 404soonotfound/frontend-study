import { useState } from "react";

export default function Counter({ totalCnt, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        {count} / {totalCnt}
      </h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          onClick();
        }}
      >
        Increment
      </button>
    </div>
  );
}
