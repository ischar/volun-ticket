import { MenuItemContainer, MenuImage,MenuText } from "../../styles/AppStyles";
import { Image, Text } from 'react-native';

export const MenuItem = ({ image, menuText }) => {
  return (
    <MenuItemContainer>
      <MenuImage>
        <Image source={image} />
      </MenuImage>
      <MenuText>
        <Text>{menuText}</Text>
      </MenuText>
    </MenuItemContainer>
  );
};
