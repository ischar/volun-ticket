import React from "react";
import { Header } from "../components/common/Header";
import { Banner } from "../components/Banner";
import { NavigationTile } from "../components/common/\bNavigationTile";
import { NavSection } from "../styles/AppStyles";
import Container from "../components/common/\bContainer";

export const MainScreen = () => {
  return (
    <Container>
      <Header title="volunTicket" isMain={true} />
      <Banner />
      <NavSection>
        <NavigationTile subtitle={"봉사하기"} />
        <NavigationTile subtitle={"티켓보기"} />
      </NavSection>
    </Container>
  );
};
