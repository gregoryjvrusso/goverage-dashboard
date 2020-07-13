import React from "react";
import styled from "styled-components";
import { height, width } from "styled-system";

const Container = styled.svg`
  ${width}
  ${height}
`;

const Search = ({ ...props }) => (
  <Container {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      stroke="#FFF"
      fill="#FFF"
      className="focusFill"
      d="M22 20L20 22 14 16 14 14 16 14z"
    />
    <path
      fill="none"
      stroke="#FFF"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M9 3A6 6 0 1 0 9 15A6 6 0 1 0 9 3Z"
    />
    <path
      fill="#FFF"
      stroke="#FFF"
      strokeMiterlimit="10"
      className="focusFill"
      d="M13 13L15.5 15.5"
    />
  </Container>
);

export default Search;
