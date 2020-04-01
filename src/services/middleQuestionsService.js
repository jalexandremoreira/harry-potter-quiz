const questions = [
  {
    id: "m0001",
    question: "What’s the name of Harry Potter’s godfather?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Thom Yorke."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Sirius Black."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Phill Selway."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Colin Greenwood."
      }
    ]
  },
  {
    id: "m0002",
    question:
      "What ancient beast did Harry Potter have to fight in ‘The Chamber of Secrets’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "A Rancor."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "A Chimera."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "A Basilisk."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "A Behemoth."
      }
    ]
  },
  {
    id: "m0003",
    question: "Who did Harry Potter take to the Yule Ball in ‘Goblet of Fire’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Luna Lovegood."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Cho Chang."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Greta Gerwig."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Padma Patil."
      }
    ]
  },
  {
    id: "m0004",
    question:
      "What potion did Hermione Granger laboriously brew in ‘The Chamber of Secrets’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "A love potion."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Liquid Luck."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Polyjuice Potion."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Moon Shaped Potion."
      }
    ]
  },
  {
    id: "m0005",
    question:
      "What street did Harry Potter grow up in, when he lived with his uncle and aunt?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "Privet Drive."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Abbey Road."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Adelaide Road."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Grimmauld Place."
      }
    ]
  },
  {
    id: "m0006",
    question:
      "Which of Hagrid’s unreasonable pets did Harry and Hermione save in ‘The Prisoner of Azkaban’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "A whale."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "An unicorn."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "A hippogriff."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "A giant spider."
      }
    ]
  },
  {
    id: "m0007",
    question: "What is the full name of Lord Voldmort’s father?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "Tom Riddle."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Tom Selleck."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Tom Hanks."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Tom Morello."
      }
    ]
  },
  {
    id: "m0008",
    question: "What is the name of the most frequented bar in Hogsmead?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "The Four Trolls."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "The Three Broomsticks."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "The Two Goblins."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "The Prancing Pony."
      }
    ]
  },
  {
    id: "m0009",
    question:
      "What did Harry, Ron and Hermione do to get past Fluffy, the three-headed dog, in ‘Philosopher’s Stone’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "They played fetch with it."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "They gave it a bone."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "They played music."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "They Shouted ‘BAD DOG’."
      }
    ]
  },
  {
    id: "m0010",
    question:
      "Where did Harry Potter and his friends train proper Defense Against the Dark Arts in ‘The Order of the Phoenix’?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "The room of requirement."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Professor Umbrige’s classroom."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "A local Starbucks."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "The second floor girl’s bathroom."
      }
    ]
  }
];

export const getMiddleQuestions = () => {
  return JSON.parse(JSON.stringify(questions));
};
