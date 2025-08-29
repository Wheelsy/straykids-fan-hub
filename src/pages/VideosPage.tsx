import React, { useState } from "react";
import { Stack, Typography, Card, CardContent, Grid } from "@mui/material";
import YouTubeEmbed from "../components/YouTubeEmbed";
import SingleYouTubeVidEmbed from "../components/SingleYouTubeVidEmbed";

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
        <Grid item xs={12} md={6}>
          <SingleYouTubeVidEmbed
            url="https://www.ondemandkorea.com/en/player/vod/show-champion"
            title="Show Champion - Wednesday 8:00 PM AEST"
            alt_img_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.E4KrsEvPEbJq8qnhQgHvmwHaEK%3Fpid%3DApi&f=1&ipt=692fb5cbbe88d93662857798d8df82c8081a32588df7801343c9a6824a61b98e&ipo=images"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SingleYouTubeVidEmbed
            url="https://www.youtube.com/live/q77fiDiL9aY"
            title="M Countdown - Thursday 7:00 PM AEST"
            alt_img_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.tj6vWealjqafjH0Pbl1beAHaEo%3Fr%3D0%26pid%3DApi&f=1&ipt=95cd57493282e285f26f9e062afc3455ecb278f5feb635119d5d29501672699d&ipo=images"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SingleYouTubeVidEmbed
            url="https://www.youtube.com/@kbsworldtv"
            title="Music Bank - Friday 6:00 PM AEST"
            alt_img_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.vLGZkRnxkh81KbHpS6X0rAAAAA%3Fpid%3DApi&f=1&ipt=c42fffa108e649afff878e88d2c64b9bcb9771f112b4701eaa8097e7ca2f6f7c&ipo=images"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SingleYouTubeVidEmbed
            url=" https://www.youtube.com/@MBCkpop"
            title="Music Core - Saturday 5:45 PM AEST"
            alt_img_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.kHQXE3tZzkVEajv8xCVxVQHaE9%3Fpid%3DApi&f=1&ipt=30ad9e9be2c887dc3495a4072fcb8af75f00c50a12f74a36caf193c32f1e5278&ipo=images"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
