import { HStack } from "@chakra-ui/layout";
import { Image} from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding='10px'>
        <Image src={Logo} boxSize={59} />
        <ColorModeSwitch />
      </HStack>
    </div>
  ); 
};

export default NavBar;
