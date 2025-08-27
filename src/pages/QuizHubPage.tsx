import React from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { quizzes } from "../data/quizzes";
import { useNavigate } from "react-router-dom";

export const QuizHub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={3} mt={4} alignItems="center">
      <Typography variant="h3" fontWeight={800}>
        Quizzes
      </Typography>

      <Stack spacing={3} width="100%" maxWidth={600}>
        {quizzes.map((quiz) => (
          <Card key={quiz.id} sx={{ p: 2 }}>
            <CardContent>
              <Box
                component="img"
                src={quiz.image}
                alt={quiz.title}
                sx={{ width: "100%", borderRadius: 2, mb: 2 }}
              />
              <Typography variant="h5">{quiz.title}</Typography>
              <Typography mt={1}>{quiz.description}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate(`/quiz/${quiz.id}`)}
              >
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
