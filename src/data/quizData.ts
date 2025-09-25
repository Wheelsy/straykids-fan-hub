export interface QuizOption {
  text: string;
  member: string | null;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  answer?: string | string[];
}

export interface TriviaQuestion {
  question: string;
  answer: string[];
}

export enum QuizType {
  WhichKid = 0,
  Trivia = 1,
}

export const quizQuestions: (QuizQuestion[] | TriviaQuestion[])[] = [
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
  // Stray Kids Trivia Quiz
  [
    {
      question: "Who is the leader of Stray Kids?",
      answer: [
        "bang chan",
        "chan",
        "bangchan",
        "christopher",
        "bang christopher chan",
        "chris",
      ],
    },
    {
      question: "In which year did Stray Kids officially debut?",
      answer: ["2018", "twenty eighteen"],
    },
    {
      question: "What is the name of Stray Kids' fanbase?",
      answer: ["stay", "stays"],
    },
    {
      question:
        "Which Stray Kids member is known for his love of cats and has three cats named Sooni, Doongi, and Dori?",
      answer: ["lee know", "leeknow", "minho", "lee minho"],
    },
    {
      question:
        "Which Stray Kids member is known for his freckled cheeks and is often referred to as the 'Australian sunshine'?",
      answer: ["felix", "yongbok", "lee yongbok"],
    },
    {
      question: "Which Stray Kids member is known for his voice impressions?",
      answer: ["han", "jisung", "han jisung"],
    },
    {
      question:
        "What is the name of the main producing unit within Stray Kids?",
      answer: ["3racha", "three racha", "3 racha"],
    },
    {
      question: "Which album became Stray Kids' first million-selling album?",
      answer: ["noeasy"],
    },
    {
      question:
        "What was the title track of Stray Kids' first studio album 'Go Live'?",
      answer: ["god's menu", "gods menu"],
    },
    {
      question: "What is the name of the dance unit in Stray Kids?",
      answer: ["danceracha", "dance racha"],
    },
    {
      question: "What is the name of the vocal unit in Stray Kids?",
      answer: ["vocalracha", "vocal racha"],
    },
    {
      question: "Which three members make up 3RACHA?",
      answer: [
        "bang chan, changbin, and han",
        "bang chan changbin han",
        "chan changbin han",
        "bangchan changbin han",
        "bang chan and changbin and han",
        "chan changbin and han",
        "bangchan changbin and han",
        "bang chan changbin and han",
        "bangchan changbin and han",
        "han changbin and bang chan",
        "han changbin bang chan",
        "han and changbin and bang chan",
        "han and changbin bang chan",
        "han changbin and bangchan",
        "han changbin bangchan",
        "changbin and bang chan and han",
        "changbin bang chan han",
        "changbin and bang chan han",
        "changbin bang chan and han",
      ],
    },
    {
      question: "What was Stray Kids' debut EP called?",
      answer: ["i am not"],
    },
    {
      question: "On what date did Stray Kids officially debut?",
      answer: [
        "march 25, 2018",
        "25 march 2018",
        "march 25 2018",
        "25 march 2018",
        "3/25/2018",
        "25/3/2018",
      ],
    },
    {
      question: "What was the name of the reality show that formed Stray Kids?",
      answer: ["stray kids"],
    },
    {
      question: "Which entertainment company does Stray Kids belong to?",
      answer: ["jyp entertainment", "jyp"],
    },
    {
      question:
        "What is the name of Stray Kids' unofficial debut EP released in January 2018?",
      answer: ["mixtape"],
    },
    {
      question: "Which member left Stray Kids in 2019?",
      answer: ["woojin", "kim woojin"],
    },
    {
      question: "What is the three EP series that followed Stray Kids' debut?",
      answer: [
        "i am series",
        "i am not, i am who, i am you",
        "i am trilogy",
        "i am",
      ],
    },
    {
      question: "What trilogy came after the I Am series?",
      answer: [
        "clé trilogy",
        "cle trilogy",
        "clé series",
        "cle series",
        "clé",
        "cle",
        "cle1:miroh, cle2:yellow wood, cle:levanter",
        "clé 1:miroh, clé 2:yellow wood, clé:levanter",
        "cle 1:miroh, cle 2:yellow wood, cle:levanter",
      ],
    },
    {
      question: "What is Bang Chan's position in the group besides leader?",
      answer: ["producer", "main producer"],
    },
    {
      question: "Which member is known as the main dancer of Stray Kids?",
      answer: ["lee know", "minho", "lee minho"],
    },
    {
      question: "What is Changbin's main role in the group?",
      answer: ["main rapper", "rapper"],
    },
    {
      question: "Which member is known for his visual and modeling potential?",
      answer: ["hyunjin", "hwang hyunjin"],
    },
    {
      question: "What is I.N's position in the group?",
      answer: ["maknae", "youngest"],
    },
    {
      question: "Which two members are from Australia?",
      answer: [
        "bang chan and felix",
        "chan and felix",
        "felix and bang chan",
        "chan felix",
        "bangchan and felix",
        "bangchan felix",
        "felix and bangchan",
        "felix bangchan",
      ],
    },
    {
      question: "What is the stray kids motto?",
      answer: [
        "stray kids everywhere all around the world",
        "stray kids everywhere, all around the world",
        "stray kids everywhere all around world!",
        "stray kids everywhere, all around world!",
      ],
    },
    {
      question:
        "Which song contains the lyric 'Cookin' like a chef I'm a 5-star Michelin'?",
      answer: ["god's menu", "gods menu"],
    },
    {
      question:
        "What was the first Stray Kids song to be certified gold by the RIAA?",
      answer: ["god's menu", "gods menu"],
    },
    {
      question:
        "Which album marked Stray Kids' first number one debut on the Gaon Album Chart?",
      answer: ["go live"],
    },
    {
      question:
        "What award did Stray Kids receive at the 35th Golden Disc Awards?",
      answer: ["best performance award", "best performance"],
    },
    {
      question: "Which member has the most KOMCA songwriting credits?",
      answer: [
        "bang chan",
        "chan",
        "bangchan",
        "christopher",
        "chris",
        "bang christopher chan",
      ],
    },
    {
      question:
        "Where did the Stray Kids go on their first SKZ code after the covid pandemic?",
      answer: ["jeju island", "jeju"],
    },
    {
      question: "What does SKZ stand for?",
      answer: ["stray kids"],
    },
    {
      question: "Which member is known for being ambidextrous?",
      answer: ["lee know", "lee minho", "minho"],
    },
    {
      question: "What animal does Changbin often get compared to?",
      answer: ["pig"],
    },
    {
      question: "Which member is known for his trot singing skills?",
      answer: ["i.n", "in", "yang jeongin"],
    },
    {
      question: "What is Felix's Korean name?",
      answer: ["lee yongbok", "yongbok"],
    },
    {
      question: "Which member was born in Malaysia?",
      answer: ["han", "jisung", "han jisung", "jisung han"],
    },
    {
      question: "What is Han's real name?",
      answer: ["han jisung"],
    },
    {
      question: "Which member is known for his baseball skills?",
      answer: ["seungmin", "kim seungmin"],
    },
    {
      question: "What is I.N's real name?",
      answer: ["yang jeongin", "jeongin"],
    },
    {
      question: "Who is the oldest member of Stray Kids?",
      answer: [
        "bang chan",
        "chan",
        "bangchan",
        "christopher",
        "chris",
        "bang christopher chan",
      ],
    },
    {
      question: "Who is the youngest member of Stray Kids?",
      answer: ["i.n", "yang jeongin", "jeongin"],
    },
    {
      question: "Which member is known for his drawing and painting skills?",
      answer: ["hyunjin", "hwang hyunjin"],
    },
    {
      question: "What is Lee Know's real name?",
      answer: ["lee minho", "minho"],
    },
    {
      question: "Which member has experience as a backup dancer before debut?",
      answer: ["lee know", "minho", "lee minho"],
    },
    {
      question: "What is Changbin's real name?",
      answer: ["seo changbin", "changbin"],
    },
    {
      question: "Which member is known for his deep voice?",
      answer: ["felix", "yongbok", "lee yongbok"],
    },
    {
      question: "What is Bang Chan's English first name?",
      answer: ["christopher", "chris"],
    },
    {
      question: "Which member lived in Australia for the longest time?",
      answer: ["felix", "yongbok", "lee yongbok"],
    },
    {
      question: "What is Hyunjin's real name?",
      answer: ["hwang hyunjin", "hyunjin"],
    },
  ],
];
