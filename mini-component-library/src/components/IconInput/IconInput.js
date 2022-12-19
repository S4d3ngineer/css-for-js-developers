import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const STYLES = {
    small: {
      fontSize: 14 / 16,
      iconSize: 16,
      borderSize: 2,
      height: 24 / 14,
    },
    large: {
      fontSize: 18 / 16,
      iconSize: 24,
      borderSize: 3,
      height: 2,
    },
  };

  const style = STYLES[size];

  if (!style) {
    throw new Error("Incorrect size was provides to IconInput component");
  }
    
  const { fontSize, iconSize, borderSize, height } = style;


  return (
    <Wrapper>
      <VisuallyHidden>
        <label for="input">{label}</label>
      </VisuallyHidden>
      <Input
        id="input"
        placeholder={placeholder}
        style={{
          "--font-size": fontSize + "rem",
          "--border-size": borderSize + "px",
          "--width": width + "px",
          "--height": height + "em",
        }}
      />
      <StyledIcon id={icon} size={iconSize} style={{ "--icon-size": iconSize + "px" }} />
    </Wrapper>
  );
};

const Input = styled.input`
  position: relative;
  border: none;
  border-bottom: var(--border-size) solid black;
  outline: none;
  margin-bottom: -2px;
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

  &:focus-within input {
    outline: 2px auto ${COLORS.primary};
    outline-offset: 3px;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 2px;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-size);

  /* & svg { */
  /*   width: var(--icon-size); */
  /*   height: var(--icon-size); */
  /* } */
`;

export default IconInput;
