import { HStack } from "@chakra-ui/layout";
import { Image} from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <div>
      <HStack  padding='10px'>
        <Image src={Logo} boxSize={59} />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </div>
  ); 
};

export default NavBar;
