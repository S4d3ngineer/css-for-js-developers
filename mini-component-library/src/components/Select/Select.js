import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <SelectWrapper>
        <StyledSelect value={value} onChange={onChange}>
          {children}
        </StyledSelect>
        <Chevron id="chevron-down" />
      </SelectWrapper>
    </>
  );
};

const Chevron = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto 0;
  width: 1.5rem;
  height: 1.5rem;
  color: inherit;
`;

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  outline: none;
  color: inherit;
`;

const SelectWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 12px 58px 12px 16px;
  width: fit-content;
  cursor: pointer;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700}; 
  &:focus-within  {
    outline: 2px solid ${COLORS.primary};
  }
  &:hover {
    color: black;
  }
`;

export default Select;
