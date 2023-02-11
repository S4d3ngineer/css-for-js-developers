import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

function NavLink({ children, ...delegated }) {
  return (
    <>
      {/* <Link {...delegated}> */}
      {/*   <MainText>{children}</MainText> */}
      {/*   <HoverText aria-hidden={true}>{children}</HoverText> */}
      {/* </Link> */}
      <AlternativeLink {...delegated}>{children}</AlternativeLink>
    </>
  );
}

const Link = styled.a`
  position: relative;
  /* Hidden for animation purposes */
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const AlternativeLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  &::before {
    display: inline-block;
    opacity: 0;
    content: "[";
    transition: transform 500ms, opacity 200ms;
  }

  &:hover::before {
    transform: translateX(-10px);
    opacity: 1;
    transition: transform 200ms, opacity 200ms;
  }

  &::after {
    display: inline-block;
    opacity: 0;
    content: "]";
    transition: transform 500ms, opacity 200ms;
  }

  &:hover::after {
    transform: translateX(10px);
    opacity: 1;
    transition: transform 200ms, opacity 200ms;
  } 
`;

const AlternativeText = styled.span`
  &::before {
    content: ">";
    transform: translateY(-20px);
  }

  &::after {
    content: "<";
    transform: translateY(-2px);
  }
`;

const MainText = styled.span`
  display: block;
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Link}:hover & {
      transform: translateY(-100%);
      transition: transform 200ms;
    }
  }
`;

const HoverText = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bold;
  transform: translateY(100%);
  transition: transform 500ms;
  @media (prefers-reduced-motion: no-preference) {
    ${Link}:hover & {
      transform: translateY(0%);
      transition: transform 300ms;
    }
  }
`;

export default NavLink;
