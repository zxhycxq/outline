import * as React from "react";
import styled from "styled-components";
import env from "~/env";
import OutlineLogo from "./OutlineLogo";

type Props = {
  href?: string;
};

function Branding({ href = env.URL }: Props) {
  return (
    <Link href={href}>
      <OutlineLogo size={16} />
      &nbsp;Outline
    </Link>
  );
}

const Link = styled.a`
  z-index: ${(props) => props.theme.depths.sidebar + 1};
  position: fixed;
  bottom: 0;
  left: 0;

  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-top-right-radius: 2px;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  padding: 16px;

  svg {
    fill: ${(props) => props.theme.text};
  }

  &:hover {
    background: ${(props) => props.theme.sidebarBackground};
  }
`;

export default Branding;
