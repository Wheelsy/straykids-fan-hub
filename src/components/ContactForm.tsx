import React from "react";
import { useForm } from "@formspree/react";
import { TextField, Button, Box, Typography, CardMedia } from "@mui/material";
import skz_gif from "../assets/skz.gif";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeoldokb");

  if (state.succeeded) {
    return (
      <Typography>
        Thanks for the email. I'll respond as soon as I can 🙂
      </Typography>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        required
      />
      <TextField
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        required
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button type="submit" variant="contained" disabled={state.submitting}>
          Submit
        </Button>
        <CardMedia
          component="img"
          image={skz_gif}
          alt="gif unavailable"
          sx={{
            height: 50,
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
