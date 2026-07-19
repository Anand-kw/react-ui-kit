import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>&lt;/&gt;</div>

      <div className={styles.text}>
        <span className={styles.react}>React</span>
        <span className={styles.separator}>-</span>
        <span className={styles.ui}>UI</span>
        <span className={styles.separator}>-</span>
        <span className={styles.kit}>Kit</span>
      </div>
    </div>
  );
}