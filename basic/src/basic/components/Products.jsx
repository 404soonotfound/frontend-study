import { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [isLoading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((yn) => !yn);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <input
        type="checkbox"
        name="sales"
        id="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Sale </label>

      <ul>
        {products.map((p, idx) => (
          <li key={idx}>
            <article>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
