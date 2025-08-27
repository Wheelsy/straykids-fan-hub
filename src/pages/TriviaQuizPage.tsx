import React, { useState } from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { quizQuestions, QuizType, TriviaQuiz } from "../data/quizData";

// Function to shuffle array and select random questions
const getRandomQuestions = (questions: any[], count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const TriviaQuizPage: React.FC = () => {
  const triviaQuizObj = quizQuestions[QuizType.Trivia][0] as TriviaQuiz;

  const [selectedQuestions] = useState(() =>
    getRandomQuestions(triviaQuizObj.questions, 10)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const triviaQuestions = selectedQuestions;

  const handleSubmitAnswer = () => {
    if (currentAnswer.trim() === "") return;

    setAnswers((prev) => [...prev, currentAnswer.trim()]);
    setCurrentAnswer("");

    if (currentIndex + 1 < triviaQuestions.length) {
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
      if (checkAnswer(answer, triviaQuestions[idx].answer)) {
        correct++;
      }
    });
    return correct;
  };

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / triviaQuestions.length) * 100);

    return (
      <Stack spacing={3} alignItems="center" mt={4}>
        <Typography variant="h4" fontWeight={800}>
          Trivia Quiz Results
        </Typography>
        <Card sx={{ p: 3, maxWidth: 600, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              Your Score: {score}/{triviaQuestions.length} ({percentage}%)
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
          {triviaQuestions.map((q, idx) => (
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
            const newQuestions = getRandomQuestions(
              triviaQuizObj.questions,
              10
            );
            // Reset all state for new quiz
            window.location.reload(); // Simple way to reset component state completely
          }}
        >
          Take New Quiz
        </Button>
      </Stack>
    );
  }

  const currentQuestion = triviaQuestions[currentIndex];

  return (
    <Stack spacing={3} mt={4} alignItems="center">
      <Typography variant="h4" fontWeight={800}>
        {triviaQuizObj.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        {triviaQuizObj.description}
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
              {currentIndex + 1 === triviaQuestions.length
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Typography variant="body2" color="text.secondary">
        Question {currentIndex + 1} of {triviaQuestions.length}
      </Typography>
    </Stack>
  );
};
