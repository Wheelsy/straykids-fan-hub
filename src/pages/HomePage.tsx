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
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          height: 230,
          backgroundImage:
            "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com/originals/d6/85/02/d68502f7f612d3b9737168ff2ea157ac.jpg&f=1&nofb=1&ipt=8584d3d6dd32baeea014805b2d1b602eb7b717530a0e7d8444abe73092923b96)",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
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
      </Box>

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
