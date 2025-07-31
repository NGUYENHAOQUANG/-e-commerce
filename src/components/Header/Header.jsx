import React from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./styles.module.scss";
import Menu from "./Menu/Menu";
import Logo from "@icons/images/Logo-retina.webp";
import Heart from "@icons/svgs/heartIcon.svg";
import Reload from "@icons/svgs/reloadIcon.svg";
import Cart from "@icons/svgs/cart.svg";
export default function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((items) => (
              <BoxIcon type={items.type} href={items.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((items) => (
              <Menu content={items.content} href={items.href} />
            ))}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "153px", height: "53px" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((items) => (
              <Menu content={items.content} href={items.href} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={Heart} alt="heart" />
            <img width={26} height={26} src={Reload} alt="reload" />
            <img width={26} height={26} src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
