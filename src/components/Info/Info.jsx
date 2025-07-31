import MainLayout from "@components/Layout/Layout";
import { dataInfo } from "./constants";
import InfoCard from "./InfoCard";
import styles from "./styles.module.scss";
export default function Info() {
  const { container } = styles;
  return (
    <div>
      <MainLayout>
        <div className={container}>
          {dataInfo.map((items) => (
            <InfoCard
              title={items.title}
              des={items.description}
              icon={items.src}
            />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}
