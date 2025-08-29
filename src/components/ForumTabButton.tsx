import React from "react";
import { Button } from "@mui/material";

interface ForumTabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const ForumTabButton: React.FC<ForumTabButtonProps> = ({
  label,
  active,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? "contained" : "outlined"}
      color={active ? "primary" : "inherit"}
      sx={{
        marginRight: 1,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: active ? 600 : 400,
      }}
    >
      {label}
    </Button>
  );
};

export default ForumTabButton;
