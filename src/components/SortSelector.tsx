import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevence
        </MenuButton>
        <MenuList>
          <MenuItem>Relevence</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Populartity</MenuItem>
          <MenuItem>Release Date</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
