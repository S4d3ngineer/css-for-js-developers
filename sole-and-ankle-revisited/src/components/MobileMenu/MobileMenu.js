/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <Button onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </Button>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  background: var(--color-backdrop)
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-white);
  width: 300px;
  padding: 32px;
  padding: 16px 8px 32px 32px;
  a {
    text-decoration: none;
  }
`;

const Button = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: var(--color-gray-900)};
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  a {
    color: var(--color-gray-700)};
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.normal};
  }
`;

export default MobileMenu;
