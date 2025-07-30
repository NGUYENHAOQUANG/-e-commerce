import styles from "../styles.module.scss";
import fbIcon from "@icons/svgs/fbIcon.svg";
import insIcon from "@icons/svgs/insIcon.svg";
import ytbIcon from "@icons/svgs/ytbIcon.svg";

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const handleRerender = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return insIcon; // Placeholder for Instagram icon
      case "ytb":
        return ytbIcon; // Placeholder for YouTube icon
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRerender(type)} alt={type} />
    </div>
  );
}
export default BoxIcon;
