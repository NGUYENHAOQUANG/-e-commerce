import React from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon } from "./constant";
import styles from "./styles.module.scss";
export default function Header() {
  const { containerBoxIcon } = styles;
  return (
    <div>
      <div>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((items) => {
            return <BoxIcon type={items.type} href={items.href} />;
          })}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
