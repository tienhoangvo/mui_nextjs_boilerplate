// @mui/material
import Button from "@mui/material/Button";

// src/react/components
import Link from "./Link";

const LinkButton = ({ href, children, ...rest }) => {
  return (
    <Button component={Link} href={href} {...rest} noLinkStyle>
      {children}
    </Button>
  );
};

export default LinkButton;
