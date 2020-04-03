const questions = [
  {
    id: "e0001",
    question: "What is Harry Potter known for?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Breaking up the Beatles."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Defeating Darth Vader."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Defeating Lord Voldemort."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Beating Hilary Clinton in the primaries."
      }
    ]
  },
  {
    id: "e0002",
    question: "What are Harry Potter’s parents called?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "John and Yoko."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Charles and Diana."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Brad and Angelina."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "James and Lily."
      }
    ]
  },
  {
    id: "e0003",
    question: "What school does Harry Potter attend?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Bobbytorts School of Plumbing."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Hogwarts School of Witchcraft and Wizardry."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Crumplemubs School of Arts and Crafts."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Pompiloos School of Gardening and Pruning."
      }
    ]
  },
  {
    id: "e0004",
    question: "What is Harry Potter’s middle name?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "James."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Paul."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Ringo."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "George."
      }
    ]
  },
  {
    id: "e0005",
    question: "At what age did Harry Potter find out he was special?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "22."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "16."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "11."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "13."
      }
    ]
  },
  {
    id: "e0006",
    question: "What is Harry Potter’s Place of birth?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "Godric’s Hollow."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Tatooine."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Liverpool."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Westeros."
      }
    ]
  },
  {
    id: "e0007",
    question: "What is Harry Potter’s favourite sport?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Blitzball."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Hearthstone."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Quidditch."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Archery."
      }
    ]
  },
  {
    id: "e0008",
    question: "Who is Rubeus Hagrid?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Harry’s Chauffeur."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "The local innkeep."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Harry’s bandmate."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "The groundskeeper at Harry’s school."
      }
    ]
  },
  {
    id: "e0009",
    question: "Who are Harry Potter’s best friends?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "Ron and Hermione."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Luke and Leia."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Sansa and Robb."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Rick and Morty."
      }
    ]
  },
  {
    id: "e0010",
    question: "What is Harry Potter’s best subject at school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Divination."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Web Design."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Defense Against the Dark Arts."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Macaroni Art."
      }
    ]
  },
  {
    id: "e0011",
    question: "Who is Harry Potter’s most hated professor?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Professor Utonium."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Professor Snape."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Professor Oak."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Professor Chaos."
      }
    ]
  },
  {
    id: "e0012",
    question: "Where is Harry Potter’s school located?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "Scotland."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Sweden."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "USA."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "China."
      }
    ]
  },
  {
    id: "e0013",
    question: "Where does Harry Potter buy his school stuff?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Straightforwardalley."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Verticalley."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Horizontalley."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Diagonalley."
      }
    ]
  },
  {
    id: "e0014",
    question: "What’s the name of the village close to Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Dogsfeed."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Brogsleed."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Hogsmead."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Frogsteeth."
      }
    ]
  },
  {
    id: "e0015",
    question: "What animal does Harry Potter have as a pet?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "A direwolf."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "A bat."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "An owl."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "A racoon."
      }
    ]
  },
  {
    id: "e0016",
    question: "How does Harry Potter and his schoolmates travel to the school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "They drive."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "They walk."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "They take the train."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "They fly. On airplanes."
      }
    ]
  },
  {
    id: "e0017",
    question: "What’s the name of the forest near Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "John."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Black Forest."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Forbidden Forest."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Ugly Forest."
      }
    ]
  },
  {
    id: "e0018",
    question:
      "What is the name of the first Harry Potter book? Harry Potter and...",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "...the New Hope."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "…the Last Crusade."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "…the Philosopher’s Stone."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "…the Corona Virus."
      }
    ]
  },
  {
    id: "e0019",
    question:
      "What type of animal does the Dark Lord have a magical connection with?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Donkeys."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Giraffes."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Snakes."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Ants."
      }
    ]
  },
  {
    id: "e0020",
    question: "Who wrote the Harry Potter books?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "J.R.R. Tolkien."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "J.K. Rowling."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Dr. Dre."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Louisa May Alcott."
      }
    ]
  },
  {
    id: "e0021",
    question: "How many siblings does Ron Weasly have?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "3."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Over 9000."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "1."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "6."
      }
    ]
  },
  {
    id: "e0022",
    question: "Who is Harry Potter’s rival at school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Rubeus Hagrid."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Vincent Crabbe."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Ice King."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Draco Malfoy."
      }
    ]
  },
  {
    id: "e0023",
    question: "At what age do students graduate from Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "18."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "60."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "22."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "17."
      }
    ]
  },
  {
    id: "e0024",
    question:
      "What is the most interesting feature in the Great Hall at Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "The floor is lava."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Gravity is inverted, students walk on the ceiling."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Food is served."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer:
          "The ceiling is enchanted to appear missing, revealing the sky above."
      }
    ]
  },
  {
    id: "e0025",
    question:
      "What dangerous means of transportation did Harry and Ron use to travel to school in ‘The Chamber of Secrets’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "They flew on a dragon."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "They swam."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "They drove a Tesla in ‘ludicrous mode’."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "They flew there on a flying car."
      }
    ]
  },
  {
    id: "e0026",
    question:
      "What terrible fate did Harry and Hermione save Sirius Black from in ‘The Prisoner of Azkaban’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Financial ruin."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "A dementor’s bad cooking."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "A dementor’s hug."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "A dementor’s kiss."
      }
    ]
  },
  {
    id: "e0027",
    question: "Where do wizards store their money?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Under their beds."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Under the sea."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "In a magical, secret compartment in their wallets."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "At Gringotts Bank."
      }
    ]
  },
  {
    id: "e0028",
    question: "What do wizards call non-magic people?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Nomags."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Normies."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Muffins."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Muggles."
      }
    ]
  },
  {
    id: "e0029",
    question: "Which of the following is a class at Harry Potter’s school?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Scuba Diving."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Bouldering."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Witch Hunting."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Divination."
      }
    ]
  },
  {
    id: "e0030",
    question:
      "What is the correct designation for a female member of the wizarding community?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Wizardess."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Wizard Lady."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "WizardX."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Witch."
      }
    ]
  },
  {
    id: "e0031",
    question:
      "What is the name of the secret group that Harry, Ron and Hermione formed in ‘The Order of the Phoenix’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Daring and Audacious."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Dumb and Arrogant."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Drunk and Annoying."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Dumbledore’s Army."
      }
    ]
  }
];

export const getEasyQuestions = () => {
  return JSON.parse(JSON.stringify(questions));
};
