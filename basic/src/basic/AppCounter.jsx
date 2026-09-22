import { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [totalCnt, setTotalCnt] = useState(0);
  const handleClick = () => setTotalCnt((prevCnt) => prevCnt + 1);
  return (
    <div>
      <h1>
        Total Count:: {totalCnt} {totalCnt > 10 ? "😡" : "😊"}
      </h1>
      <Counter totalCnt={totalCnt} onClick={handleClick} />
      <Counter totalCnt={totalCnt} onClick={handleClick} />
    </div>
  );
}
