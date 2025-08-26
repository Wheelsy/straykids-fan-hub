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
} from "@mui/material";
import { events } from "../data/events";

export default function CalendarPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={800}>
        Calendar
      </Typography>
      <Card>
        <CardContent>
          <List>
            {sorted.map((e, idx) => (
              <ListItem key={idx} divider>
                <ListItemText
                  primary={`${new Date(e.date).toLocaleDateString()} — ${
                    e.title
                  }`}
                  secondary={e.location}
                />
                {e.link && (
                  <Link href={e.link} target="_blank" rel="noreferrer">
                    Details
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Stack>
  );
}
