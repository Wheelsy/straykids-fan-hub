import { Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
import NewsPage from "./pages/NewsPage";
import SocialPage from "./pages/SocialPage";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container sx={{ flex: 1, py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}
