import styles from "./InputBasico.module.css";

function InputBasico({ tipo = "text", placeholder, valor, onChange }) {
  return (
    <input
      type={tipo}
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
      className={styles.inputBase}
    />
  );
}

export default InputBasico;