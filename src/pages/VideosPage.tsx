import React, { useState } from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
} from "@mui/material";
import YouTubeEmbed from "../components/YouTubeEmbed";
import MusicShowCard from "../components/MusicShowCard";
import mcountdown from '../assets/mcountdown.png';
import music_bank from '../assets/music_bank.png';
import music_core from '../assets/music_core.png';
import inkigayo from '../assets/inkigayo.png';

export default function VideosPage() {
  const [playlistId] = useState("UU9rMiEjNaCSsebs31MRDCRA");

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={800}>
        Stray Kids Videos
      </Typography>
      <Card>
        <CardContent>
          <YouTubeEmbed playlistId={playlistId} />
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom>
        Music Shows
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MusicShowCard
            title="M Countdown: Thu 19:00 AEST"
            img={mcountdown}
            live_link="https://www.youtube.com/live/q77fiDiL9aY"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MusicShowCard
            title="Music Bank: Fri 18:15 AEST"
            img={music_bank}
            live_link="https://www.youtube.com/@KBSWORLDTV"
            vod_link="https://kshow123.tv/show/music-bank/"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MusicShowCard
            title="Show! Music Core: Sat 16:30 AEST"
            img={music_core}
            live_link="https://www.youtube.com/@MBCkpop"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MusicShowCard
            title="Inkigayo: Sun 16:30 AEST"
            img={inkigayo}
            live_link="https://www.twitch.tv/noctaq"
            vod_link="https://kshow123.tv/show/sbs-inkigayo/"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
