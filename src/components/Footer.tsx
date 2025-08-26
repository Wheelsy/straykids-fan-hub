import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: "center", opacity: 0.7 }}>
      <Typography variant="body2">
        Fan-made site. All embeds © their respective owners.
      </Typography>
    </Box>
  );
}
