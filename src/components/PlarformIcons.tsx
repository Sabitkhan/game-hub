import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hook/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[];
}
const PlarformIcons = ({ platforms }: props) => {
  const iconMap :{[key:string]:IconType} ={
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    iox: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((paltform) => (
<Icon as={iconMap[paltform.slug]}color='gray.500'/>
))}
    </HStack>
  );
};

export default PlarformIcons;
