import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext.jsx";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className="btn-toggle" onClick={toggleDarkMode}>
        {darkMode ? "🌙" : "☀️"}
      </button>
      <ul className={styles.filters}>
        {filters.map((f) => (
          <li key={f}>
            <button
              onClick={() => onFilterChange(f)}
              className={`${styles.filter} ${filter === f && styles.selected}`}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
