import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #ebedef;
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  height: 40px;
  top: 48px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuContainer = styled.View`
  width: 100%;
  height: 93px;
  left: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: row;
`;

export const Placeholder = styled.View`
  width: 32px;
`;

export const MenuItemContainer = styled.View`
  width: 44px;
  height: 47px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 12px;
  position: relative;
`;

export const MenuImage = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  tint-color: ${({ isActive }) => (isActive ? "#007AFF" : "#8e8e93")};
`;

export const MenuText = styled.Text`
  text-align: center;
  color: #8e8e93;
  color: ${({ isActive }) => (isActive ? "#007AFF" : "#8E8E93")};
  font-size: 12px;
  font-weight: 900;
  margin-top: 4px;
`;

export const TitleText = styled.Text`
  text-align: center;
  color: #343434;
  font-size: 16px;
  font-weight: 800;
`;

export const BannerContainer = styled.View`
  width: 100%;
  height: 420px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 72px; /* Banner와 NavSection 간격 추가 */
`;

export const NavigationTitle = styled.View`
  width: 168px;
  height: 124px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const NavSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const NavHeader = styled.View`
  width: 100%;
  flex-direction: row;
  items-align: right;
  justify-content: flex-end;
  margin-top: 12px;
`;

export const SubTitleText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #3f3f46;
  margin-top: 6px;
  margin-right: 8px;
`;

export const SubTitleImage = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
