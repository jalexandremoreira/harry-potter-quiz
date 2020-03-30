const questions = [
  {
    id: "f0001",
    question: "What is Harry Potter known for?",
    answers: [
      {
        isCorrect: false,
        answer: "Breaking up the Beatles."
      },
      {
        isCorrect: false,
        answer: "Defeating Darth Vader."
      },
      {
        isCorrect: true,
        answer: "Defeating Lord Voldemort."
      },
      {
        isCorrect: false,
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
        answer: "John and Yoko."
      },
      {
        isCorrect: false,
        answer: "Charles and Diana."
      },
      {
        isCorrect: false,
        answer: "Brad and Angelina."
      },
      {
        isCorrect: true,
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
        answer: "Bobbytorts School of Plumbing."
      },
      {
        isCorrect: true,
        answer: "Hogwarts School of Witchcraft and Wizardry."
      },
      {
        isCorrect: false,
        answer: "Crumplemubs School of Arts and Crafts."
      },
      {
        isCorrect: false,
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
        answer: "James."
      },
      {
        isCorrect: false,
        answer: "Paul."
      },
      {
        isCorrect: false,
        answer: "Ringo."
      },
      {
        isCorrect: false,
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
        answer: "22."
      },
      {
        isCorrect: false,
        answer: "16."
      },
      {
        isCorrect: true,
        answer: "11."
      },
      {
        isCorrect: false,
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
        answer: "Godric’s Hollow."
      },
      {
        isCorrect: false,
        answer: "Tatooine."
      },
      {
        isCorrect: false,
        answer: "Liverpool."
      },
      {
        isCorrect: false,
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
        answer: "Blitzball."
      },
      {
        isCorrect: false,
        answer: "Hearthstone."
      },
      {
        isCorrect: true,
        answer: "Quidditch."
      },
      {
        isCorrect: false,
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
        answer: "Harry’s Chauffeur."
      },
      {
        isCorrect: false,
        answer: "The local innkeep."
      },
      {
        isCorrect: false,
        answer: "Harry’s bandmate."
      },
      {
        isCorrect: true,
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
        answer: "Ron and Hermione."
      },
      {
        isCorrect: false,
        answer: "Luke and Leia."
      },
      {
        isCorrect: false,
        answer: "Sansa and Robb."
      },
      {
        isCorrect: false,
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
        answer: "Divination."
      },
      {
        isCorrect: false,
        answer: "Web Design."
      },
      {
        isCorrect: true,
        answer: "Defense Against the Dark Arts."
      },
      {
        isCorrect: false,
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
        answer: "Professor Utonium."
      },
      {
        isCorrect: true,
        answer: "Professor Snape."
      },
      {
        isCorrect: false,
        answer: "Professor Oak."
      },
      {
        isCorrect: false,
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
        answer: "Scotland."
      },
      {
        isCorrect: false,
        answer: "Sweden."
      },
      {
        isCorrect: false,
        answer: "USA."
      },
      {
        isCorrect: false,
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
        answer: "Straightforwardalley."
      },
      {
        isCorrect: false,
        answer: "Verticalley."
      },
      {
        isCorrect: false,
        answer: "Horizontalley."
      },
      {
        isCorrect: true,
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
        answer: "Dogsfeed."
      },
      {
        isCorrect: false,
        answer: "Brogsleed."
      },
      {
        isCorrect: true,
        answer: "Hogsmead."
      },
      {
        isCorrect: false,
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
        answer: "A direwolf."
      },
      {
        isCorrect: false,
        answer: "A bat."
      },
      {
        isCorrect: true,
        answer: "An owl."
      },
      {
        isCorrect: false,
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
        answer: "They drive."
      },
      {
        isCorrect: false,
        answer: "They walk."
      },
      {
        isCorrect: true,
        answer: "They take the train."
      },
      {
        isCorrect: false,
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
        answer: "John."
      },
      {
        isCorrect: false,
        answer: "Black Forest."
      },
      {
        isCorrect: true,
        answer: "Forbidden Forest."
      },
      {
        isCorrect: false,
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
        answer: "...the New Hope."
      },
      {
        isCorrect: false,
        answer: "…the Last Crusade."
      },
      {
        isCorrect: true,
        answer: "…the Philosopher’s Stone."
      },
      {
        isCorrect: false,
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
        answer: "Donkeys."
      },
      {
        isCorrect: false,
        answer: "Giraffes."
      },
      {
        isCorrect: true,
        answer: "Snakes."
      },
      {
        isCorrect: false,
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
        answer: "J.R.R. Tolkien."
      },
      {
        isCorrect: true,
        answer: "J.K. Rowling."
      },
      {
        isCorrect: false,
        answer: "Dr. Dre."
      },
      {
        isCorrect: false,
        answer: "Louisa May Alcott."
      }
    ]
  }
];

export const getQuestions = () => {
  return questions;
};
