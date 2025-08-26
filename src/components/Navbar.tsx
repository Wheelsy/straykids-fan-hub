import * as React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/news", label: "News" },
  { to: "/social", label: "Social" },
  { to: "/calendar", label: "Calendar" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{ backdropFilter: "blur(6px)" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Stray Kids Fan Hub
        </Typography>
        <Stack direction="row" spacing={1}>
          {tabs.map((t) => (
            <Button
              key={t.to}
              component={RouterLink}
              to={t.to}
              variant={pathname === t.to ? "contained" : "text"}
              color={pathname === t.to ? "primary" : "inherit"}
            >
              {t.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
