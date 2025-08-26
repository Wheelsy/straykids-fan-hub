import * as React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  Button,
  Alert,
  Link,
} from "@mui/material";

/**
 * This page fetches Google News RSS via a public RSS-to-JSON proxy.
 * For production, create a small serverless function to fetch the RSS (to avoid CORS/rate limits).
 */

type RssItem = {
  title: string;
  link: string;
  pubDate?: string;
  author?: string;
  thumbnail?: string;
};

export default function NewsPage() {
    const [query, setQuery] = React.useState('Stray Kids')
    const [items, setItems] = React.useState<RssItem[]>([])
    const [error, setError] = React.useState<string>('')
    const [loading, setLoading] = React.useState(false)

    const fetchNews = async () => {
        try {
        setLoading(true)
        setError('')
        setItems([])
        const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`
        const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
        const res = await fetch(api)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!data?.items) throw new Error('Unexpected response')
        setItems(data.items as RssItem[])
        } catch (e: any) {
        setError(e?.message || 'Failed to load news. Consider adding a serverless proxy to avoid CORS/rate limits.')
        } finally {
        setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight={800}>
          News
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            fullWidth
            label="Search Google News"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="contained" onClick={fetchNews} disabled={loading}>
            {loading ? "Loading…" : "Search"}
          </Button>
        </Stack>

        {error && <Alert severity="warning">{error}</Alert>}

        <Grid container spacing={3}>
          {items.map((it, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {it.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.8 }}
                    gutterBottom
                  >
                    {it.author || ""}{" "}
                    {it.pubDate
                      ? `• ${new Date(it.pubDate).toLocaleString()}`
                      : ""}
                  </Typography>
                  <Link href={it.link} target="_blank" rel="noreferrer">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
}