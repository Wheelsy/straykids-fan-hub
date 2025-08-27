// src/data/quizzes.ts
import { quizQuestions, QuizType } from "./quizData";
import { memberImages } from "./quizImgs";

export const quizzes = [
  {
    id: "which-kid",
    title: "Which Stray Kids Member Are You?",
    description: "Find out which Stray Kids member matches your personality!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.korezin.com%2Fwp-content%2Fuploads%2F2023%2F06%2FFzCRJi1aAAE4UJu.jpg&f=1&nofb=1&ipt=4aaf0678b1f41e96ec489c3eee168e19a6c5420da757cfdaecc2598670e12780",
    component: "WhichKidAreYouPage",
    questions: quizQuestions[QuizType.WhichKid],
    images: memberImages,
  },
  {
    id: "kids-trivia",
    title: "Test Your Stray Kids Knowledge",
    description: "Rate your knowledge about Stray Kids with this trivia quiz!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2F36%2Fd6%2F8736d6cb5ec6efd382c93669869375fb.jpg&f=1&nofb=1&ipt=6c6f1a0cc7b6dcfcbc64e64de43e06b02846aaf269d12dca85bd1f4a9d19d0e6",
    component: "TriviaQuizPage",
    questions: quizQuestions[QuizType.Trivia],
  },
];
