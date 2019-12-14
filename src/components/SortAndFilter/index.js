import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export const SortAndFilter = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} color="primary">
        <DropdownToggle caret>Filter By:</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Filter By:</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        <ButtonGroup></ButtonGroup>
      </Dropdown>
    </>
  );
};
