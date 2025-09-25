import React, { useState } from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { quizQuestions, QuizType } from "../data/quizData";
import { memberImages } from "../data/memberImgs";
import { useNavigate } from "react-router-dom";

export interface QuizQuestion {
  question: string;
  options: { text: string; member: string }[];
}

export const WhichKidAreYouPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  const handleAnswer = (member: string) => {
    setScores((prev) => ({ ...prev, [member]: (prev[member] || 0) + 1 }));
    if (currentIndex + 1 < quizQuestions[QuizType.WhichKid].length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    let maxScore = 0;
    let topMember = "";
    for (const member in scores) {
      if (scores[member] > maxScore) {
        maxScore = scores[member];
        topMember = member;
      }
    }
    return topMember;
  };

  if (showResult) {
    const member = getResult();
    return (
      <Stack spacing={3} alignItems="center" mt={4}>
        <Typography variant="h4" fontWeight={800}>
          Your Stray Kids Member:
        </Typography>
        <Card sx={{ p: 3, maxWidth: 400, textAlign: "center" }}>
          <CardContent>
            <Box
              component="img"
              src={memberImages[member]}
              alt={member}
              sx={{ width: "100%", borderRadius: 2, mb: 2 }}
            />
            <Typography variant="h5">{member}</Typography>
            <Typography mt={2}>
              Congrats! You match with {member}’s personality.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate(`/quizzes`);
              }}
            >
              Take New Quiz
            </Button>
          </CardContent>
        </Card>
      </Stack>
    );
  }

  const question = quizQuestions[QuizType.WhichKid][
    currentIndex
  ] as QuizQuestion;

  return (
    <Stack spacing={3} mt={4} alignItems="center">
      <Typography variant="h4" fontWeight={800}>
        Which Stray Kids Member Are You?
      </Typography>
      <Card sx={{ p: 3, maxWidth: 500, width: "100%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {question.question}
          </Typography>
          <Stack spacing={2} mt={2}>
            {question.options.map((option, idx) => (
              <Button
                key={idx}
                variant="outlined"
                onClick={() => handleAnswer(option.member)}
              >
                {option.text}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>
      <Typography>
        Question {currentIndex + 1} / {quizQuestions[QuizType.WhichKid].length}
      </Typography>
    </Stack>
  );
};
