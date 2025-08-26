import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: { main: "#00E5FF" },
    secondary: { main: "#FF3D00" },
    background: { default: "#0B0F14", paper: "#10151D" },
  },
  shape: { borderRadius: 16 },
});

export default theme;
