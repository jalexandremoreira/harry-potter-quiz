const questions = [
  {
    id: "h0001",
    question: " What band performed at the Yule Ball in ‘The Goblet of Fire’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Radiohead."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Weird Sisters."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Twisted Sisters."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "The Cure."
      }
    ]
  },
  {
    id: "h0002",
    question: "What kind of animal is Hermione Granger’s pet?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "A cat."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Half-Kneazle."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "A dog."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Three turtles."
      }
    ]
  },
  {
    id: "h0003",
    question: "What is Ron Weasley’s pet rat’s secret identity?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "James Bond."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Peter Pettigrew."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Sirius Black."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Aberforth Dumbledore."
      }
    ]
  },
  {
    id: "h0004",
    question:
      "What class does Professor Snape teach in ‘The Half-Blood Prince’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Potions."
      },
      {
        isCorrect: true,
        id: "a00b",
        answer: "Defense Against the Dark Arts."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Divination."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Muggle Studies."
      }
    ]
  },
  {
    id: "h0005",
    question: "What was Remus Lupin’s most well guarded secret?",
    answers: [
      {
        isCorrect: true,
        id: "a00a",
        answer: "He was secretly a werewolf."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "He actually really hated Harry."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "He was serving the Dark Lord the whole time."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "His relationship with Nymphadora Tonks."
      }
    ]
  },
  {
    id: "h0006",
    question:
      "Which advanced magical discipline did Professor Dumbledore have Professor Snape teach Harry Potter in ‘The Order of the Phoenix’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Legilimency."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Dark Magic."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Occlumency."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Necromancy."
      }
    ]
  },
  {
    id: "h0007",
    question: "What was the last challenge of the Triwizard Tournament?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "A Harry Potter quiz."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Fighting a dragon."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "A maze."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "A broom-mounted race."
      }
    ]
  },
  {
    id: "h0008",
    question: "Where is the entry to the Hogwarts kitchen?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "On the tallest tower."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Behind a statue of a one-legged witch."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "At the end of the dining hall."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Behind a painting of a fruit bowl."
      }
    ]
  },
  {
    id: "h0009",
    question:
      "What pulls the carriages that take the students from the train station to Hogwarts?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Bowtruckles."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Invisible horses."
      },
      {
        isCorrect: false,
        id: "a00c",
        answer: "Hidden ropes."
      },
      {
        isCorrect: true,
        id: "a00d",
        answer: "Thestrals."
      }
    ]
  },
  {
    id: "h0010",
    question:
      "What is the name of the wand that Voldemort desperately looks for in ‘The Deathly Hallows’?",
    answers: [
      {
        isCorrect: false,
        id: "a00a",
        answer: "Holly Wand."
      },
      {
        isCorrect: false,
        id: "a00b",
        answer: "Deathly Wand."
      },
      {
        isCorrect: true,
        id: "a00c",
        answer: "Elder Wand."
      },
      {
        isCorrect: false,
        id: "a00d",
        answer: "Prime Wand."
      }
    ]
  }
];

export const getHardQuestions = () => {
  return JSON.parse(JSON.stringify(questions));
};
