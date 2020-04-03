const flavorText = [
  {
    id: "f0001",
    text:
      "Omg, you're dumber than Voldemort. I mean, have you thought about his plans...?"
  },
  {
    id: "f0002",
    text: "Woah! You're as thick as a Troll..."
  },
  {
    id: "f0003",
    text: "You're a regular Crabbe and/or Goyle. Blimey..."
  },
  {
    id: "f0004",
    text: "You're Grawp. Yeah, Hagrid's brother. That's who you are."
  },
  {
    id: "f0005",
    text:
      "Much like Ron, you're barely making it. You think your mom's proud of you?"
  },
  {
    id: "f0006",
    text: "Like Harry, you're just OKAY. No more, no less. Congrats."
  },
  {
    id: "f0007",
    text: "You're a proper Ravenclaw! Not bad."
  },
  {
    id: "f0008",
    text:
      "You know who else was pretty smart but made some mistakes? Dumbledore. Nice!"
  },
  {
    id: "f0009",
    text:
      "You're pretty much a genius. You're like Hermione on a bad day. That's a huge compliment, btw."
  }
];

export const getFlavorText = percentage => {
  if (percentage >= 91) return flavorText[8].text;
  else if (percentage >= 81) return flavorText[7].text;
  else if (percentage >= 71) return flavorText[6].text;
  else if (percentage >= 61) return flavorText[5].text;
  else if (percentage >= 41) return flavorText[4].text;
  else if (percentage >= 26) return flavorText[3].text;
  else if (percentage >= 11) return flavorText[2].text;
  else if (percentage >= 1) return flavorText[1].text;
  else if (percentage === 0) return flavorText[0].text;
};
