import { HStack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={Logo} boxSize={60} />
        <Text> Navbar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
