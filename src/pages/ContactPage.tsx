import ContactForm from "../components/ContactForm";
import { Box } from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        padding: 5,
        maxWidth: 1000,
        margin: "0 auto",
        maxHeight: 1000,
        overflowY: "auto",
      }}
    >
      <ContactForm />
    </Box>
  );
}
