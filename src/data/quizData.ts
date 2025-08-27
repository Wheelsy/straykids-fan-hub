export interface QuizOption {
  text: string;
  member: string | null;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface TriviaQuestion {
  question: string;
  answer: string;
}

export interface TriviaQuiz {
  id: string;
  title: string;
  description: string;
  image: string;
  questions: TriviaQuestion[];
}

export enum QuizType {
  WhichKid = 0,
  Trivia = 1,
}

export const quizQuestions: (QuizQuestion[] | TriviaQuiz[])[] = [
  // Which Kid Quiz
  [
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
        { text: "Jokbal", member: "Lee Know" },
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
  ],

  // Stray Kids Trivia Quiz - Now with 50+ questions!
  [
    {
      id: "stray-kids-trivia",
      title: "Stray Kids Trivia Quiz",
      description:
        "Test your knowledge about Stray Kids with this fun trivia quiz! (10 random questions selected each time)",
      image: "/images/stray-kids-trivia.jpg",
      questions: [
        {
          question: "Who is the leader of Stray Kids?",
          answer: "Bang Chan",
        },
        {
          question: "In which year did Stray Kids officially debut?",
          answer: "2018",
        },
        {
          question: "What is the name of Stray Kids' fanbase?",
          answer: "Stay",
        },
        {
          question:
            "Which Stray Kids member is known for his love of cats and has three cats named Sooni, Doongi, and Dori?",
          answer: "Lee Know",
        },
        {
          question:
            "Which Stray Kids member is known for his freckled cheeks and is often referred to as the 'Australian sunshine'?",
          answer: "Felix",
        },
        {
          question:
            "Which Stray Kids member is known for his voice impressions?",
          answer: "Han",
        },
        {
          question:
            "What is the name of the main producing unit within Stray Kids?",
          answer: "3RACHA",
        },
        {
          question:
            "Which album became Stray Kids' first million-selling album?",
          answer: "Noeasy",
        },
        {
          question:
            "What was the title track of Stray Kids' first studio album 'Go Live'?",
          answer: "God's Menu",
        },
        {
          question: "What is the name of the dance unit in Stray Kids?",
          answer: "DanceRacha",
        },
        {
          question: "What is the name of the vocal unit in Stray Kids?",
          answer: "VocalRacha",
        },
        {
          question: "Which three members make up 3RACHA?",
          answer: "Bang Chan, Changbin, and Han",
        },
        {
          question: "What was Stray Kids' debut EP called?",
          answer: "I Am Not",
        },
        {
          question: "On what date did Stray Kids officially debut?",
          answer: "March 25, 2018",
        },
        {
          question:
            "What was the name of the reality show that formed Stray Kids?",
          answer: "Stray Kids",
        },
        {
          question: "Which entertainment company does Stray Kids belong to?",
          answer: "JYP Entertainment",
        },
        {
          question:
            "What is the name of Stray Kids' unofficial debut EP released in January 2018?",
          answer: "Mixtape",
        },
        {
          question: "Which member left Stray Kids in 2019?",
          answer: "Woojin",
        },
        {
          question:
            "What are the three EP series that followed Stray Kids' debut?",
          answer: "I Am series",
        },
        {
          question: "What trilogy came after the I Am series?",
          answer: "Clé trilogy",
        },
        {
          question: "What is Bang Chan's position in the group besides leader?",
          answer: "Producer",
        },
        {
          question: "Which member is known as the main dancer of Stray Kids?",
          answer: "Lee Know",
        },
        {
          question: "What is Changbin's main role in the group?",
          answer: "Main rapper",
        },
        {
          question:
            "Which member is known for his visual and modeling potential?",
          answer: "Hyunjin",
        },
        {
          question: "What instrument does Seungmin primarily play?",
          answer: "Guitar",
        },
        {
          question: "What is I.N's position in the group?",
          answer: "Maknae",
        },
        {
          question: "Which two members are from Australia?",
          answer: "Bang Chan and Felix",
        },
        {
          question: "What does 'Stay' stand for as the fandom name?",
          answer: "Stray Kids Everywhere All Around The World",
        },
        {
          question:
            "Which song contains the lyric 'Cookin' like a chef I'm a 5-star Michelin'?",
          answer: "God's Menu",
        },
        {
          question:
            "What was the first Stray Kids song to be certified gold by the RIAA?",
          answer: "God's Menu",
        },
        {
          question:
            "Which album marked Stray Kids' first number one debut on the Gaon Album Chart?",
          answer: "Go Live",
        },
        {
          question:
            "What award did Stray Kids receive at the 35th Golden Disc Awards?",
          answer: "Best Performance Award",
        },
        {
          question: "Which member has the most KOMCA songwriting credits?",
          answer: "Bang Chan",
        },
        {
          question: "What is the Korean name for Stray Kids?",
          answer: "스트레이 키즈",
        },
        {
          question: "What does SKZ stand for?",
          answer: "Stray Kids",
        },
        {
          question: "Which member is known for being ambidextrous?",
          answer: "Lee Know",
        },
        {
          question: "What animal does Changbin often get compared to?",
          answer: "Pig",
        },
        {
          question: "Which member is known for his trot singing skills?",
          answer: "I.N",
        },
        {
          question: "What is Felix's Korean name?",
          answer: "Lee Yongbok",
        },
        {
          question: "Which member was born in Malaysia?",
          answer: "Felix",
        },
        {
          question: "What is Han's real name?",
          answer: "Han Jisung",
        },
        {
          question: "Which member is known for his baseball skills?",
          answer: "Seungmin",
        },
        {
          question: "What is I.N's real name?",
          answer: "Yang Jeongin",
        },
        {
          question: "Who is the oldest member of Stray Kids?",
          answer: "Bang Chan",
        },
        {
          question: "Who is the youngest member of Stray Kids?",
          answer: "I.N",
        },
        {
          question:
            "Which member is known for his drawing and painting skills?",
          answer: "Hyunjin",
        },
        {
          question: "What is Lee Know's real name?",
          answer: "Lee Minho",
        },
        {
          question:
            "Which member has experience as a backup dancer before debut?",
          answer: "Lee Know",
        },
        {
          question: "What is Changbin's real name?",
          answer: "Seo Changbin",
        },
        {
          question: "Which member is known for his deep voice?",
          answer: "Felix",
        },
        {
          question: "What is Bang Chan's Korean name?",
          answer: "Bang Christopher Chan",
        },
        {
          question: "Which member lived in Australia for the longest time?",
          answer: "Bang Chan",
        },
        {
          question: "What is Hyunjin's real name?",
          answer: "Hwang Hyunjin",
        },
      ],
    },
  ],
];
