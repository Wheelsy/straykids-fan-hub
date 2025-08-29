import React, { useState } from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

interface SingleYouTubeVidEmbedProps {
  url: string;
  alt_img_url: string;
  title?: string;
}

export default function SingleYouTubeVidEmbed({
  url,
  alt_img_url,
  title,
}: SingleYouTubeVidEmbedProps) {
  const [play, setPlay] = useState(false);

  // Convert YouTube URL to embed URL if possible
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtube.com/live/")) {
      return url.replace("live/", "embed/");
    }
    if (url.includes("youtube.com/@")) {
      // Not a video, just a channel link
      return "";
    }
    return url;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <Card>
      <CardContent>
        {title && (
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            {title}
          </Typography>
        )}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "560px",
            aspectRatio: "16/9",
            cursor: play && embedUrl ? "default" : "pointer",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
            background: "#000",
          }}
          onClick={() => !play && !!embedUrl && setPlay(true)}
        >
          {!play || !embedUrl ? (
            <>
              <img
                src={alt_img_url}
                alt={title || "Video placeholder"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              style={{ aspectRatio: "16/9", border: 0 }}
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </Box>
      </CardContent>
    </Card>
    );
}