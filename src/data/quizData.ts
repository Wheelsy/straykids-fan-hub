export interface QuizQuestion {
  question: string;
  options: { text: string; member: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What's your favorite way to stay active?",
    options: [
      { text: "GYM!!", member: "Changbin" },
      { text: "Hiking", member: "Lee Know" },
      { text: "Sports", member: "Bang Chan" },
      { text: "Yoga and stretching", member: "Seungmin" },
      { text: "Dancing", member: "Han" },
      { text: "I don't", member: "I.N" },
      { text: "Martial arts", member: "Felix" },
      { text: "Bowling", member: "Hyunjin" },
    ],
  },
  {
    question: "Pick a food you crave the most:",
    options: [
      { text: "Fried chicken", member: "Felix" },
      { text: "Chocolate cake", member: "Han" },
      { text: "Eggs", member: "Seungmin" },
      { text: "French fries", member: "Changbin" },
      { text: "Ramen", member: "Bang Chan" },
      { text: "Sushi", member: "Hyunjin" },
      { text: "Jokbal ", member: "Lee Know" },
      { text: "Anything but beans", member: "I.N" },
    ],
  },
  {
    question: "How do you spend your free time?",
    options: [
      { text: "Painting or drawing", member: "Hyunjin" },
      { text: "Playing with my cats", member: "Lee Know" },
      { text: "Writing or composing music", member: "Bang Chan" },
      { text: "Watching mukbang", member: "I.N" },
      { text: "Cooking", member: "Han" },
      { text: "Working out", member: "Changbin" },
      { text: "Gaming", member: "Felix" },
      { text: "Reading or journaling", member: "Seungmin" },
    ],
  },
  {
    question: "What's your favorite music style?",
    options: [
      { text: "Rap", member: "Changbin" },
      { text: "Pop ballads", member: "Seungmin" },
      { text: "Upbeat dance/electronic", member: "Felix" },
      { text: "K-pop", member: "Bang Chan" },
      { text: "Indie", member: "Hyunjin" },
      { text: "Hip hop", member: "Lee Know" },
      { text: "Rock", member: "Han" },
      { text: "Trot", member: "I.N" },
    ],
  },
  {
    question: "What's your ideal vacation?",
    options: [
      { text: "Galleries and museums", member: "Hyunjin" },
      { text: "Writing music in peace", member: "Bang Chan" },
      { text: "Solo travelling", member: "Seungmin" },
      { text: "Trying food in different countries", member: "Changbin" },
      { text: "Beach holiday", member: "Han" },
      { text: "Amusement parks and games", member: "I.N" },
      { text: "Spending time with family", member: "Felix" },
      { text: "Cabin in the mountains", member: "Lee Know" },
    ],
  },
  {
    question: "Pick an animal you relate to:",
    options: [
      { text: "Rabbit", member: "Lee Know" },
      { text: "Fox", member: "I.N" },
      { text: "Quokka", member: "Han" },
      { text: "Wolf", member: "Bang Chan" },
      { text: "Pig/bunny hybrid", member: "Changbin" },
      { text: "Chicken", member: "Felix" },
      { text: "Ferret", member: "Hyunjin" },
      { text: "Puppy", member: "Seungmin" },
    ],
  },
  {
    question: "How do you solve challenges?",
    options: [
      { text: "Face it head-on with energy", member: "Changbin" },
      { text: "Talk it through with others", member: "Bang Chan" },
      {
        text: "Analyze the problem carefully and methodically",
        member: "Seungmin",
      },
      {
        text: "Think creatively, take breaks to clear my mind",
        member: "Hyunjin",
      },
      { text: "Worry and stress", member: "Han" },
      { text: "Practice dance moves", member: "Lee Know" },
      { text: "Ask for help", member: "I.N" },
      {
        text: "Stay positive, things have a way of working out",
        member: "Felix",
      },
    ],
  },
  {
    question: "What's your hidden talent?",
    options: [
      { text: "Voice impressions", member: "Han" },
      { text: "Imitating mosquito sounds", member: "Felix" },
      { text: "Singing trot music", member: "I.N" },
      { text: "Fast rap", member: "Changbin" },
      { text: "Being ambidextrous", member: "Lee Know" },
      { text: "Baseball", member: "Seungmin" },
      { text: "Fast runner", member: "Bang Chan" },
      { text: "Drawing", member: "Hyunjin" },
    ],
  },
];
