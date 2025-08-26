import {
  Box,
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Stack spacing={4}>
      {/* Hero */}
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          background:
            "linear-gradient(135deg, rgba(0,229,255,0.12), rgba(255,61,0,0.12))",
        }}
      >
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Stray Kids Fan Hub
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8 }} gutterBottom>
          A site for my sweets 🤍
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button component={RouterLink} to="/videos" variant="contained">
            Watch Videos
          </Button>
          <Button component={RouterLink} to="/news" variant="outlined">
            Read News
          </Button>
          <Button component={RouterLink} to="/calendar" variant="text">
            Events
          </Button>
        </Stack>
      </Box>

      {/* Highlights */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Latest Video
              </Typography>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed?list=UU9rMiEjNaCSsebs31MRDCRA&index=1"
                title="Latest Stray Kids Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Button
                  href="https://www.youtube.com/@straykids"
                  target="_blank"
                  rel="noreferrer"
                >
                  Official YouTube
                </Button>
                <Button
                  href="https://twitter.com/Stray_Kids"
                  target="_blank"
                  rel="noreferrer"
                >
                  Official X (Twitter)
                </Button>
                <Button
                  href="https://www.instagram.com/realstraykids/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Official Instagram
                </Button>
                <Button
                  href="https://news.google.com/search?q=Stray%20Kids&hl=en-US&gl=US&ceid=US:en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google News Search
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
