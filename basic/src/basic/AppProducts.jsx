import { useState } from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setProducts] = useState(false);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setProducts((show) => !show)}>toggle</button>
    </div>
  );
}
