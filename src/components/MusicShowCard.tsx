import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";

interface MusicShowCardProps {
  title: string;
  img: string;
  live_link?: string;
  vod_link?: string;
}

export default function MusicShowCard({
  title,
  img,
  live_link,
  vod_link,
}: MusicShowCardProps) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia component="img" height="180" image={img} alt={title} />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>

        <Stack direction="row" spacing={2}>
          {live_link && (
            <Button
              variant="contained"
              color="error"
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Live
            </Button>
          )}
          {vod_link && (
            <Button
              variant="outlined"
              color="primary"
              href={vod_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              VODs
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
