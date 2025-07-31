import Header from "../Header/Header";
import MainLayout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import styles from "./styles.module.scss";
export default function HomePage() {
  const { container } = styles;
  return (
    <div className={container}>
      <Header />
      <Banner />
    </div>
  );
}
