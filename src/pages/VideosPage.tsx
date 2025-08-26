import * as React from "react";
import { Stack, Typography, Card, CardContent, TextField } from "@mui/material";
import YouTubeEmbed from "../components/YouTubeEmbed";

export default function VideosPage() {
  const [playlistId, setPlaylistId] = React.useState(
    "UU9rMiEjNaCSsebs31MRDCRA"
  );

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={800}>
        Videos
      </Typography>
      <Card>
        <CardContent>
          <YouTubeEmbed playlistId={playlistId} />
        </CardContent>
      </Card>
    </Stack>
  );
}
