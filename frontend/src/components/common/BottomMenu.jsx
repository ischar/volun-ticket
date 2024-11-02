import React from "react";
import { MenuContainer } from "../../styles/AppStyles";
import { MenuItem } from "./MenuItem";

export default function BottomMenu() {
  return (
    <MenuContainer>
      <MenuItem menuText="홈" image={require('../../assets/icons/home.png')} />
      <MenuItem menuText="메뉴" image={require('../../assets/icons/menu.png')} />
      <MenuItem menuText="티켓" image={require('../../assets/icons/ticket.png')} />
      <MenuItem menuText="봉사" image={require('../../assets/icons/volunteer.png')} />
      <MenuItem menuText="MY" image={require('../../assets/icons/my.png')} />

    </MenuContainer>
  );
}
