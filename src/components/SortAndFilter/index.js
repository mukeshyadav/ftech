import React, { useState } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { useBlogAppValue } from "../../store.js";

export const SortAndFilter = () => {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const toggleFilterDropDown = () =>
    setFilterDropdownOpen(prevState => !prevState);

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const toggleCategoryDropDown = () =>
    setCategoryDropdownOpen(prevState => !prevState);

  const [
    {
      filterby: { author, category }
    },
    dispatch
  ] = useBlogAppValue();

  return (
    <Row>
      <Col className="d-flex justify-content-end" sm="12">
        <Dropdown
          isOpen={filterDropdownOpen}
          toggle={toggleFilterDropDown}
          color="primary"
        >
          <DropdownToggle caret>Filter By:</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Author:</DropdownItem>
            {author.map(name => (
              <DropdownItem
                key={name}
                onClick={e =>
                  dispatch({ type: "FILTER_BY_AUTHOR", payload: name })
                }
              >
                {name}
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem header>Category:</DropdownItem>
            {category.map(name => (
              <DropdownItem
                key={name}
                onClick={e =>
                  dispatch({ type: "FILTER_BY_CATEGORY", payload: name })
                }
              >
                {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          isOpen={categoryDropdownOpen}
          toggle={toggleCategoryDropDown}
          color="primary"
          className="ml-3"
        >
          <DropdownToggle caret>Sort By:</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={e => dispatch({ type: "SORT_BY", payload: "author" })}
            >
              Author
            </DropdownItem>
            <DropdownItem
              onClick={e => dispatch({ type: "SORT_BY", payload: "category" })}
            >
              Category
            </DropdownItem>
            <DropdownItem
              onClick={e =>
                dispatch({ type: "SORT_BY", payload: "published_date" })
              }
            >
              Date
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
};
