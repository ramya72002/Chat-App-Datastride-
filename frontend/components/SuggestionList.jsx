"use client";
import styles from "../styles/SuggestionList.module.css";

export default function SuggestionList({ suggestions, onSelect }) {
  return (
    <div className={styles.suggestionList}>
      {suggestions.map((item) => (
        <div
          key={item.id}
          className={styles.suggestionItem}
          onClick={() => onSelect(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
