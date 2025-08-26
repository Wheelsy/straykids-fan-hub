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
          backgroundImage:
            "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd6%2F85%2F02%2Fd68502f7f612d3b9737168ff2ea157ac.jpg&f=1&nofb=1&ipt=8584d3d6dd32baeea014805b2d1b602eb7b717530a0e7d8444abe73092923b96)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 3,
          },
          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          gutterBottom
          sx={{ color: "white" }}
        >
          Stray Kids Fan Hub
        </Typography>
        <Typography
          variant="h6"
          sx={{ opacity: 0.9, color: "white" }}
          gutterBottom
        >
          A site for my sweets 🤍
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button component={RouterLink} to="/videos" variant="contained">
            Watch Videos
          </Button>
          <Button
            component={RouterLink}
            to="/news"
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            Read News
          </Button>
          <Button
            component={RouterLink}
            to="/calendar"
            variant="text"
            sx={{ color: "white" }}
          >
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
                  href="https://straykids.jype.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Official Website
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
