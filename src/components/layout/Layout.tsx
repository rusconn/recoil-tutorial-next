import { Container, styled } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { PropsWithChildren } from "react";

type Props = Pick<PropsWithChildren<unknown>, "children"> & Pick<CommonProps, "className">;

const Component = ({ children, className }: Props) => (
  <Container className={className} maxWidth="sm">
    {children}
  </Container>
);

export const Layout = styled(Component)`
  padding-top: ${props => props.theme.spacing(2)};

  @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
    padding-top: ${props => props.theme.spacing(3)};
  }
`;
