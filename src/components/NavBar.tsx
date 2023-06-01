import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo3.jpg";
const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        padding="5px"
        borderRadius="20px"
      ></Image>
      <Text>Movies</Text>
    </HStack>
  );
};

export default NavBar;
