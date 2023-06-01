import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo3.jpg";
import ColorMode from "./ColorMode";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image
        src={logo}
        boxSize="60px"
        padding="5px"
        borderRadius="20px"
      ></Image>
      <Text>Movies</Text>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
