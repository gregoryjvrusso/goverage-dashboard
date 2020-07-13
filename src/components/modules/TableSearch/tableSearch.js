import React, { useState } from "react";
import styled from "styled-components";
import Table from "../../elements/Table";
import Box from "../../elements/Box";
import Flex from "../../elements/Flex";
import Input from "../../elements/Input";

const Container = styled(Box)`
  background: #282a36;
  color: white;
  margin: 20px 10px;
`;

const sortList = (sort, list, setList, currentData) => {
  let sortableItems = [...list];
  if (sort !== null) {
    sortableItems.sort((a, b) => {
      if (a[sort.name] < b[sort.name]) {
        return sort.direction === "ascending" ? -1 : 1;
      }
      if (a[sort.name] > b[sort.name]) {
        return sort.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }
  setList(currentData("", sortableItems));
};

const TableSearch = ({ files, onClickLine }) => {
  const [sort, setSort] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [textItems, setTextItems] = useState("");
  const [list, setList] = useState(currentData);
  const maxPage = Math.ceil(files.length / itemsPerPage);

  function currentData(currentPageTemp, listItems, itemsPerPageTemp) {
    const currentPageT = currentPageTemp || currentPage;
    const itemsPerPageT = itemsPerPageTemp || itemsPerPage;
    const items = listItems || files;
    const begin = (currentPageT - 1) * itemsPerPageT;
    const end = begin + itemsPerPageT;
    setTextItems(
      `${begin + 1}-${end <= items.length ? parseInt(end) : items.length} of ${
        items.length
      }`
    );
    return items.slice(begin, end);
  }

  const onInputChange = (e) => {
    const change = e.target.value;
    const filted = files.filter((doc) => doc.name.indexOf(change) !== -1);
    setList(filted);
  };

  const configSort = (name) => {
    let direction = "descending";
    if (sort.name === name && sort.direction === "descending") {
      direction = "ascending";
    }
    setSort({ name, direction });
    sortList({ name, direction }, files, setList, currentData);
  };

  const onClickArrow = (arrow) => {
    let currentPageTemp =
      arrow === "left"
        ? Math.max(currentPage - 1, 1)
        : Math.min(currentPage + 1, maxPage);
    setCurrentPage(currentPageTemp);
    setList(currentData(currentPageTemp, "", ""));
  };

  const alterItemsPerPage = (number) => {
    setItemsPerPage(number);
    setList(currentData("", "", number));
  };

  return (
    <Container>
      <Flex justifyContent="flex-end">
        <Box width="50%">
          <Input onInputChange={onInputChange} />
        </Box>
      </Flex>
      {list && (
        <Table
          sort={sort}
          list={list}
          onClickHead={configSort}
          onClickLine={onClickLine}
          onClickArrow={onClickArrow}
          alterItemsPerPage={alterItemsPerPage}
          textItems={textItems}
        />
      )}
    </Container>
  );
};

export default TableSearch;
