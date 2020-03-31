const questions = [
  {
    id: "f0001",
    question: "What is Harry Potter known for?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Breaking up the Beatles."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Defeating Darth Vader."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "Defeating Lord Voldemort."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Beating Hilary Clinton in the primaries."
      }
    ]
  },
  {
    id: "f0002",
    question: "What are Harry Potter’s parents called?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "John and Yoko."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Charles and Diana."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Brad and Angelina."
      },
      {
        isCorrect: true,
        answerId: "a00d",
        answer: "James and Lily."
      }
    ]
  },
  {
    id: "f0003",
    question: "What school does Harry Potter attend?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Bobbytorts School of Plumbing."
      },
      {
        isCorrect: true,
        answerId: "a00b",
        answer: "Hogwarts School of Witchcraft and Wizardry."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Crumplemubs School of Arts and Crafts."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Pompiloos School of Gardening and Pruning."
      }
    ]
  },
  {
    id: "f0004",
    question: "What is Harry Potter’s middle name?",
    answers: [
      {
        isCorrect: true,
        answerId: "a00a",
        answer: "James."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Paul."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Ringo."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "George."
      }
    ]
  },
  {
    id: "f0005",
    question: "At what age did Harry Potter find out he was special?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "22."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "16."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "11."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "13."
      }
    ]
  },
  {
    id: "f0006",
    question: "What is Harry Potter’s Place of birth?",
    answers: [
      {
        isCorrect: true,
        answerId: "a00a",
        answer: "Godric’s Hollow."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Tatooine."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Liverpool."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Westeros."
      }
    ]
  },
  {
    id: "f0007",
    question: "What is Harry Potter’s favourite sport?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Blitzball."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Hearthstone."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "Quidditch."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Archery."
      }
    ]
  },
  {
    id: "f0008",
    question: "Who is Rubeus Hagrid?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Harry’s Chauffeur."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "The local innkeep."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Harry’s bandmate."
      },
      {
        isCorrect: true,
        answerId: "a00d",
        answer: "The groundskeeper at Harry’s school."
      }
    ]
  },
  {
    id: "f0009",
    question: "Who are Harry Potter’s best friends?",
    answers: [
      {
        isCorrect: true,
        answerId: "a00a",
        answer: "Ron and Hermione."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Luke and Leia."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Sansa and Robb."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Rick and Morty."
      }
    ]
  },
  {
    id: "f0010",
    question: "What is Harry Potter’s best subject at school?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Divination."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Web Design."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "Defense Against the Dark Arts."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Macaroni Art."
      }
    ]
  },
  {
    id: "f0011",
    question: "Who is Harry Potter’s most hated professor?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Professor Utonium."
      },
      {
        isCorrect: true,
        answerId: "a00b",
        answer: "Professor Snape."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Professor Oak."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Professor Chaos."
      }
    ]
  },
  {
    id: "f0012",
    question: "Where is Harry Potter’s school located?",
    answers: [
      {
        isCorrect: true,
        answerId: "a00a",
        answer: "Scotland."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Sweden."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "USA."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "China."
      }
    ]
  },
  {
    id: "f0013",
    question: "Where does Harry Potter buy his school stuff?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Straightforwardalley."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Verticalley."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Horizontalley."
      },
      {
        isCorrect: true,
        answerId: "a00d",
        answer: "Diagonalley."
      }
    ]
  },
  {
    id: "f0014",
    question: "What’s the name of the village close to Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Dogsfeed."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Brogsleed."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "Hogsmead."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Frogsteeth."
      }
    ]
  },
  {
    id: "f0015",
    question: "What animal does Harry Potter have as a pet?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "A direwolf."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "A bat."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "An owl."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "A racoon."
      }
    ]
  },
  {
    id: "f0016",
    question: "How does Harry Potter and his schoolmates travel to the school?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "They drive."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "They walk."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "They take the train."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "They fly. On airplanes."
      }
    ]
  },
  {
    id: "f0017",
    question: "What’s the name of the forest near Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "John."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Black Forest."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "Forbidden Forest."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Ugly Forest."
      }
    ]
  },
  {
    id: "f0018",
    question:
      "What is the name of the first Harry Potter book? Harry Potter and...",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "...the New Hope."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "…the Last Crusade."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "…the Philosopher’s Stone."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "…the Corona Virus."
      }
    ]
  },
  {
    id: "f0019",
    question:
      "What type of animal does the Dark Lord have a magical connection with?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "Donkeys."
      },
      {
        isCorrect: false,
        answerId: "a00b",
        answer: "Giraffes."
      },
      {
        isCorrect: true,
        answerId: "a00c",
        answer: "Snakes."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Ants."
      }
    ]
  },
  {
    id: "f0020",
    question: "Who wrote the Harry Potter books?",
    answers: [
      {
        isCorrect: false,
        answerId: "a00a",
        answer: "J.R.R. Tolkien."
      },
      {
        isCorrect: true,
        answerId: "a00b",
        answer: "J.K. Rowling."
      },
      {
        isCorrect: false,
        answerId: "a00c",
        answer: "Dr. Dre."
      },
      {
        isCorrect: false,
        answerId: "a00d",
        answer: "Louisa May Alcott."
      }
    ]
  }
];

export const getQuestions = () => {
  return JSON.parse(JSON.stringify(questions));
};
