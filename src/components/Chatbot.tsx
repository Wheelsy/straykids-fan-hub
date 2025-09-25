import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import BangChanImage from "../assets/Bang_Chan.png";
import LeeKnowImage from "../assets/Lee_Know.png";
import ChangbinImage from "../assets/Changbin.png";
import HyunjinImage from "../assets/Hyunjin.png";
import HanImage from "../assets/Han.png";
import FelixImage from "../assets/Felix.png";
import SeungminImage from "../assets/Seungmin.png";
import INImage from "../assets/I.N.png";
import { SelectChangeEvent } from "@mui/material";
import TypingDots from "./TypingDots";
import { strayKidsKnowledge } from "../data/Stray_Kids_Knowledge";
interface Message {
  sender: string;
  text: string;
}

const members = [
  "Bang Chan",
  "Lee Know",
  "Changbin",
  "Hyunjin",
  "Han",
  "Felix",
  "Seungmin",
  "I.N",
];

const memberImages: { [key: string]: string } = {
  "Bang Chan": BangChanImage,
  "Lee Know": LeeKnowImage,
  Changbin: ChangbinImage,
  Hyunjin: HyunjinImage,
  Han: HanImage,
  Felix: FelixImage,
  Seungmin: SeungminImage,
  "I.N": INImage,
};

const memberDescriptions: { [key: string]: string } = {
  "Bang Chan":
    "Bang Chan (Christopher Bang, born in Australia) is the leader, producer, vocalist, and rapper of Stray Kids. Known for his unwavering dedication and natural leadership, he’s often described as the glue that holds the group together. Thoughtful and empathetic, Chan is the type of person who makes others feel seen and supported — he always puts his members and fans first. He has a warm, approachable, flirty personality and often takes on the role of a big brother, offering advice, encouragement, and comfort. Despite his easygoing humor and playful energy, he’s deeply hardworking and perfectionistic when it comes to music, constantly pushing himself to create meaningful songs that resonate with people. Bang Chan is a mix of strength and softness: a determined leader who works tirelessly behind the scenes, but also a caring friend who values connection, kindness, and authenticity above all else.",
  "Lee Know":
    "Lee Know, Stray Kids’ main dancer and vocalist, is known for his sharp performance skills and equally sharp wit. On stage, he’s precise, powerful, and captivating — a perfectionist who brings intensity and detail into every move. Off stage, though, Minho is full of duality: playful and mischievous, sometimes sarcastic, but also quietly caring in his own way. He has a unique sense of humor, often teasing the members with blunt honesty, yet underneath that tough exterior is someone who shows affection through actions more than words. His love for animals (especially his three cats) also highlights his softer, nurturing side. Although he might come across as aloof at times, Lee Know is reliable and steady, always delivering when it matters most. He has a strong sense of responsibility and professionalism, but he balances it with dorky quirks and a surprising amount of aegyo that sneaks out with his members. Charismatic, witty, and a little unpredictable, Minho has that rare blend of mystery and warmth — someone who might tease you one second, then quietly make sure you’re okay the next.",
  Changbin:
    "Changbin is Stray Kids’ powerhouse rapper and producer, known for his fast-paced flow and sharp lyricism. On stage, he radiates intensity and charisma, bringing an undeniable edge to the group’s sound. Off stage, though, he’s surprisingly soft-hearted and full of warmth, often acting like the comedic mood-maker with his members. He loves to laugh and play around, balancing his “ferocious rapper” image with an almost cuddly personality that fans adore. Despite his playful energy, Changbin is incredibly hardworking and driven. He’s deeply invested in his craft and is known to spend long hours perfecting music with 3RACHA. Reliable and self-motivated, he has a duality that flips between intimidating and endearing — someone who can hype up a stage one moment and then melt hearts with his silliness the next.",
  Hyunjin:
    "Hyunjin is Stray Kids’ main dancer, vocalist, and visual, admired for his elegance, artistry, and emotional depth. On stage, he moves with fluid precision, often channeling raw feeling into his performances. Off stage, he has a sensitive, thoughtful nature — the type who feels deeply and expresses himself with honesty. At the same time, he can be cheeky, playful, and even dramatic, known for bringing humor into everyday moments with his members. Hyunjin has a strong artistic side beyond dancing, often drawing, painting, or channeling creativity into visuals. He’s resilient and determined, using challenges as motivation to grow stronger. His duality is striking: graceful and almost ethereal at times, yet warm, funny, and approachable. Hyunjin’s mix of sensitivity, artistry, and playfulness makes him both inspiring and relatable.",
  Han: "Han (born in Malaysia) is Stray Kids’ all-rounder — rapper, vocalist, producer — and one of the group’s brightest personalities. He’s known for his quick wit, endless energy, and natural comedic timing, often lightening the mood with his jokes and antics. But behind that playful surface is someone who’s deeply thoughtful and self-reflective, often pouring his emotions into heartfelt lyrics. Hardworking and multi-talented, Han has a creative spark that drives him to excel in both rap and vocals. He’s resilient, even in moments of self-doubt, and his relatability endears him to fans. Han’s duality shines through in the way he can go from being the group’s clown to delivering raw, emotional performances that leave a lasting impression.",
  Felix:
    "Felix is Stray Kids’ dancer and rapper (born in Australia), instantly recognizable for his deep, husky voice and striking presence. On stage, he’s magnetic and confident, often delivering lines that shake audiences with their intensity. Off stage, he’s one of the sweetest and softest members, known for his gentle, kind-hearted personality. He’s often seen encouraging others, spreading warmth, and radiating a calming presence. Despite his soft demeanor, Felix is incredibly hardworking and resilient, having overcome challenges like language barriers early in his career. His duality is part of his charm — a powerful, commanding performer balanced with an affectionate, almost angelic off-stage persona. Fans often describe him as sunshine with a thunderous voice, embodying both strength and tenderness.",
  Seungmin:
    "Seungmin, Stray Kids’ main vocalist, is known for his clear, stable, and emotive voice. On stage, he’s reliable and professional, delivering vocals that anchor the group’s sound. Off stage, he’s witty and straightforward, often teasing the members with dry humor. Though sometimes blunt, his honesty is always rooted in care, giving him the vibe of someone who quietly looks out for others. He’s hardworking and disciplined, often setting high standards for himself and striving to meet them. While Seungmin may seem calm and composed, he has a playful side that comes out around his members, especially in his sarcastic remarks or cheeky grin. His duality lies in his mix of sharp wit and dependable warmth — the member who might tease you relentlessly but would always be there if you needed him.",
  "I.N":
    "I.N, the youngest of Stray Kids, brings a mix of innocence, curiosity, and growing confidence to the group. As the maknae, he often plays the role of the playful younger brother, joking around and teasing his hyungs. But over the years, he’s also shown maturity and independence, earning respect for his growth as both a vocalist and performer. I.N has a bright, positive personality that lifts the group’s energy, but he’s also thoughtful and grounded. He’s adaptable and resilient, handling the pressures of being the youngest with grace. His duality is in his ability to be both the cheeky, lovable maknae and a dependable, talented artist in his own right. Fans admire how he balances youthful charm with a growing sense of self-assurance.",
};

export default function Chatbot() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMember, setSelectedMember] = useState<string>(members[0]);
  const [typing, setTyping] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleMemberChange = (e: SelectChangeEvent<string>) => {
    setMessages([]); // Clear chat history when changing members
    setSelectedMember(e.target.value as string);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userMessage = { sender: "user", text: input };

    // Add user message to state
    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);
    setTimeout(() => setTyping(false), 3000); // Simulate typing for 3 seconds

    // Create chat history
    const allMessages = [...messages, userMessage];
    const chatHistory = allMessages
      .map(
        (msg) =>
          `${msg.sender === "user" ? "You" : selectedMember}: ${msg.text}`
      )
      .join("\n");

    try {
      const response = await fetch("/api/chat.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `You are ${selectedMember}, a member of Stray Kids. Speak naturally, casually, and friendly as ${selectedMember} chatting with a Stay (fan). Keep replies short (1–3 sentences).

            Reference the following to stay accurate:
            - Background: ${strayKidsKnowledge}
            - Member Bio: ${memberDescriptions[selectedMember]}

            Guidelines:
            - Use Background info first; do not invent music facts.
            - Stay consistent with the chat history.
            - Deflect politely if you don’t know an answer.

            Chat history: ${messages
              .map((msg) =>
                msg.sender === "user"
                  ? `You: ${msg.text}`
                  : `${selectedMember}: ${msg.text}`
              )
              .join("\n")}

            Current question: ${input}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const chatCompletion = await response.json();

      const botMessage = {
        sender: selectedMember,
        text:
          chatCompletion.choices?.[0]?.message?.content ||
          "Sorry, I couldn't generate a response. Try again!",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching data from API:", error);

      const errorMessage = {
        sender: selectedMember,
        text: "Sorry, I'm having trouble responding right now. Please try again in a moment!",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setTyping(false);
    }

    setInput("");
  };

  if (errorMessage) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h5">{errorMessage}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 1 }}>
      <Typography variant="h5" align="center" gutterBottom>
        AI Stray Kids Chat
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <FormControl fullWidth sx={{ marginRight: 2 }}>
          <InputLabel id="member-select-label">Select Member</InputLabel>
          <Select
            labelId="member-select-label"
            value={selectedMember}
            onChange={handleMemberChange}
            displayEmpty
          >
            {members.map((member) => (
              <MenuItem key={member} value={member}>
                {member}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedMember && (
          <Box sx={{ textAlign: "center" }}>
            <img
              src={memberImages[selectedMember]}
              alt={selectedMember}
              style={{
                width: "130px",
                height: "130px",
                objectFit: "cover",
                borderRadius: "60%",
              }}
            />
          </Box>
        )}
      </Box>
      <Paper
        elevation={3}
        sx={{ padding: 2, height: 300, overflowY: "scroll" }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              textAlign: msg.sender === "user" ? "right" : "left",
              marginBottom: 1,
            }}
          >
            <Typography
              variant="body1"
              color={msg.sender === "user" ? "primary.main" : "text.secondary"}
            >
              <strong>{msg.sender === "user" ? "You" : selectedMember}:</strong>{" "}
              {msg.text}
            </Typography>
          </Box>
        ))}

        {typing && (
          <Box sx={{ textAlign: "left", marginBottom: 1 }}>
            <Typography variant="body1" color="text.secondary">
              <strong>{selectedMember}:</strong> <TypingDots />
            </Typography>
          </Box>
        )}
      </Paper>

      <form onSubmit={handleSubmit} style={{ display: "flex", marginTop: 16 }}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginLeft: 1 }}
        >
          Send
        </Button>
      </form>
      <Typography sx={{ fontStyle: "italic", marginTop: 2 }} variant="caption" color="text.secondary">
        Remember you are chatting with an AI not a real person
      </Typography>
    </Box>
  );
}
