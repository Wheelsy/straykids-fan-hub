import { Box, Stack, Button} from "@mui/material";
interface YoutubeEmbedProps {
  playlistId: string;
}
export default function YouTubeEmbed({ playlistId }: YoutubeEmbedProps) {
  // Extract playlist ID if full URL is provided
  const getPlaylistId = (input: string) => {
    if (!input) return "";

    // If it's already just a playlist ID (starts with UU, PL, etc.)
    if (input.match(/^[A-Za-z0-9_-]+$/)) {
      return input;
    }

    // Extract from various YouTube URL formats
    const patterns = [
      /[&?]list=([A-Za-z0-9_-]+)/,
      /playlist\?list=([A-Za-z0-9_-]+)/,
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match) return match[1];
    }

    return input;
  };

  const cleanPlaylistId = getPlaylistId(playlistId);

  if (!cleanPlaylistId) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={315}
        bgcolor="grey.100"
      >
        Enter a valid playlist ID
      </Box>
    );
  }

  const getEmbedUrl = () => {
    const baseParams = `list=${cleanPlaylistId}&rel=0&showinfo=1`;
    return `https://www.youtube.com/embed/videoseries?${baseParams}`; 
  };

  const openInYouTube = () => {
    window.open(
      `https://www.youtube.com/playlist?list=${cleanPlaylistId}`,
      "_blank"
    );
  };

  return (
    <Stack spacing={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          color="error"
          onClick={openInYouTube}
          size="small"
        >
          Open Full Playlist in YouTube
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
        }}
      >
        <iframe
          src={getEmbedUrl()}
          title="YouTube playlist player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "4px",
          }}
        />
      </Box>
    </Stack>
  );
}
