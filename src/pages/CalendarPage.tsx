import * as React from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Link,
  CircularProgress,
  Alert,
} from "@mui/material";

export type EventItem = {
  date: string;
  title: string;
};

const scrapeStrayKidsSchedule = async (): Promise<EventItem[]> => {
  const events: EventItem[] = [];
  let page = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://straykids.jype.com/Default/Schedule?PgIndex=${page}`
      )}`;

      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error("Failed to fetch schedule page");

      const data = await response.json();
      const htmlContent = data.contents;

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      const scheduleItems = doc.querySelectorAll("ul.sch_detail");
      if (!scheduleItems.length) {
        hasMore = false;
        break;
      }

      scheduleItems.forEach((ul) => {
        const dateLi = ul.querySelector("li.dt_date");
        const titleLi = ul.querySelectorAll("li")[1]; // second li

        if (dateLi && titleLi) {
          const span = titleLi.querySelector("span");
          if (span) span.remove();

          const date = dateLi.textContent?.trim() || "";
          const title = titleLi.textContent?.trim() || "";

          if (date && title) events.push({ date, title });
        }
      });

      page += 1;
    }

    return events;
  } catch (error) {
    console.error("Error scraping Stray Kids schedule:", error);
    return [];
  }
};

export default function CalendarPage() {
  const [events, setEvents] = React.useState<EventItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await scrapeStrayKidsSchedule();
        if (!data.length) {
          setError("No schedule items found.");
        } else {
          setEvents(data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[new Date().getMonth()]; 

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={800}>
        Stray Kids Schedule {currentMonth}
      </Typography>

      <Card>
        <CardContent>
          {loading && <CircularProgress />}
          {error && <Alert severity="warning">{error}</Alert>}
          <List>
            {events.map((event, idx) => (
              <ListItem key={idx} divider>
                <ListItemText primary={`${event.date} — ${event.title}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Official Event Sources
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://www.ticketmaster.com/stray-kids-tickets/artist/2593788"
              target="_blank"
              rel="noreferrer"
            >
              Ticketmaster
            </Link>
            <Link
              href="https://straykids.jype.com/"
              target="_blank"
              rel="noreferrer"
            >
              Stray Kids Site
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
