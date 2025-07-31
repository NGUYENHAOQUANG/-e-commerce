import styles from "./styles.module.scss";

export default function InfoCard({ title, des, icon }) {
  const { containerCard, containerContent, d, t } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={40} src={icon} alt="image" />
      <div className={containerContent}>
        <div className={t}>{title}</div>
        <div className={d}>{des}</div>
      </div>
    </div>
  );
}
