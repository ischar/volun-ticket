import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #ebedef;
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
`;

export const MenuText = styled.Text`
  text-align: center;
  color: #8e8e93;
  font-size: 12px;
  font-weight: 900;
  margin-top: 4px;
`;
