import React, { useState } from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { quizQuestions, QuizType, TriviaQuestion } from "../data/quizData";

// Function to shuffle array and select random questions
const getRandomQuestions = (questions: TriviaQuestion[], count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const TriviaQuizPage: React.FC = () => {
  const triviaQuestions = quizQuestions[QuizType.Trivia] as TriviaQuestion[];

  const [selectedQuestions] = useState(() =>
    getRandomQuestions(triviaQuestions, 10)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmitAnswer = () => {
    if (currentAnswer.trim() === "") return;

    setAnswers((prev) => [...prev, currentAnswer.trim()]);
    setCurrentAnswer("");

    if (currentIndex + 1 < selectedQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const checkAnswer = (userAnswer: string, correctAnswer: string): boolean => {
    return (
      userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
    );
  };

  const calculateScore = (): number => {
    let correct = 0;
    answers.forEach((answer, idx) => {
      if (checkAnswer(answer, selectedQuestions[idx].answer)) {
        correct++;
      }
    });
    return correct;
  };

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / selectedQuestions.length) * 100);

    return (
      <Stack spacing={3} alignItems="center" mt={4}>
        <Typography variant="h4" fontWeight={800}>
          Stray Kids Trivia Quiz Results
        </Typography>
        <Card sx={{ p: 3, maxWidth: 600, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              Your Score: {score}/{selectedQuestions.length} ({percentage}%)
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {percentage >= 80
                ? "Excellent! You're a true Stray Kids expert! 🎉"
                : percentage >= 60
                ? "Good job! You know your Stray Kids well! 👏"
                : percentage >= 40
                ? "Not bad! Keep learning about Stray Kids! 📚"
                : "Keep studying! There's more to discover about Stray Kids! 💪"}
            </Typography>
          </CardContent>
        </Card>

        <Stack spacing={2} sx={{ maxWidth: 600, width: "100%" }}>
          {selectedQuestions.map((q, idx) => (
            <Card key={idx} sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {q.question}
                </Typography>
                <Typography
                  color={
                    checkAnswer(answers[idx], q.answer)
                      ? "success.main"
                      : "error.main"
                  }
                  fontWeight="bold"
                >
                  Your answer: {answers[idx]}
                </Typography>
                <Typography color="text.secondary">
                  Correct answer: {q.answer}
                </Typography>
                {checkAnswer(answers[idx], q.answer) ? (
                  <Typography color="success.main" sx={{ mt: 1 }}>
                    ✅ Correct!
                  </Typography>
                ) : (
                  <Typography color="error.main" sx={{ mt: 1 }}>
                    ❌ Incorrect
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={() => {
            // Reset all state for new quiz
            window.location.reload();
          }}
        >
          Take New Quiz
        </Button>
      </Stack>
    );
  }

  const currentQuestion = selectedQuestions[currentIndex];

  return (
    <Stack spacing={3} mt={4} alignItems="center">
      <Typography variant="h4" fontWeight={800}>
        Stray Kids Trivia Quiz
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        Test your knowledge about Stray Kids! (10 random questions selected each
        time)
      </Typography>

      <Card sx={{ p: 3, maxWidth: 600, width: "100%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {currentQuestion.question}
          </Typography>

          <Stack spacing={2} mt={3}>
            <TextField
              fullWidth
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Type your answer here..."
              variant="outlined"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmitAnswer();
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmitAnswer}
              disabled={currentAnswer.trim() === ""}
              size="large"
            >
              {currentIndex + 1 === selectedQuestions.length
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Typography variant="body2" color="text.secondary">
        Question {currentIndex + 1} of {selectedQuestions.length}
      </Typography>
    </Stack>
  );
};
