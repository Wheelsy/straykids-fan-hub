// src/data/quizzes.ts
import { quizQuestions, QuizType } from "./quizData";
import { memberImages } from "./memberImgs";
import WhichKidImage from "../assets/which_kid_r_u.png";
import TriviaImage from "../assets/trivia.png";

export const quizzes = [
  {
    id: "which-kid",
    title: "Which Stray Kids Member Are You?",
    description: "Find out which Stray Kids member matches your personality!",
    image: WhichKidImage,
    component: "WhichKidAreYouPage",
    questions: quizQuestions[QuizType.WhichKid],
    images: memberImages,
  },
  {
    id: "kids-trivia",
    title: "Test Your Stray Kids Knowledge",
    description: "Rate your knowledge about Stray Kids with this trivia quiz!",
    image: TriviaImage,
    component: "TriviaQuizPage",
    questions: quizQuestions[QuizType.Trivia],
  },
];
