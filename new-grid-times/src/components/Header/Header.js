import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SubcribeSection>
          <Button>Subscribe</Button>
          <Link href="">Already a member?</Link> 
        </SubcribeSection>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    align-items: center;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "menu logo subscribe";
    margin-top: 16px;
    margin-bottom: 72px;
  }

  ${ActionGroup} {
    display: none;
    grid-area: menu;
    @media ${QUERIES.laptopAndUp} {
      display: flex;
    }
  }
`;

const LogoWrapper = styled.div`
  grid-area: logo;
`;

const SubcribeSection = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* gap: 8px; */
    grid-area: subscribe;
    justify-self: end;
    align-self: center;
  }
`;

const Link = styled.a`
  position: absolute;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  text-decoration: underline;
  font-size: ${14 / 16}rem;
`

export default Header;
