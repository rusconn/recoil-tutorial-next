import { Container, Theme, css } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = Pick<PropsWithChildren<unknown>, "children">;

const container = (theme: Theme) => css`
  padding-top: ${theme.spacing(2)};

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    padding-top: ${theme.spacing(3)};
  }
`;

export const Layout = ({ children }: Props) => (
  <Container css={container} maxWidth="sm">
    {children}
  </Container>
);
