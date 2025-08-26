import * as React from "react";
import { Grid, Typography, Card, CardContent, Stack } from "@mui/material";
import IframeEmbed from "../components/IframeEmbed";

export default function SocialPage() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.sociablekit.com/instagram-profile-feed/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup: just remove the script, don't return anything
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={800}>
        Social
      </Typography>

      <Grid container spacing={3}>
        {/* Twitter */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Twitter — #straykids Timeline
              </Typography>
              <IframeEmbed url="https://widgets.sociablekit.com/twitter-hashtag-feed/iframe/25592249" />
            </CardContent>
          </Card>
        </Grid>

        {/* Instagram */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Instagram — @realstraykids Feed
              </Typography>
              <IframeEmbed url="https://widgets.sociablekit.com/instagram-feed/iframe/25592246" />
            </CardContent>
          </Card>
        </Grid>

        {/* Reddit */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Reddit — r/straykids
              </Typography>
              <IframeEmbed url="https://widgets.sociablekit.com/subreddit/iframe/25592280" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
