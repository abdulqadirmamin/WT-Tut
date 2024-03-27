import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ label, placeholderPlaceholder }) => {
  const [placeholderTextValue, setPlaceholderTextValue] = useState("");
  return (
    <div className={styles.input}>
      <div className={styles.label}>{label}</div>
      <div className={styles.input1}>
        <div className={styles.input2} />
        <input
          className={styles.placeholder}
          placeholder={placeholderPlaceholder}
          type="text"
          value={placeholderTextValue}
          onChange={(event) => setPlaceholderTextValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
