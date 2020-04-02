import { arrayScrambler } from "./arrayScrambler";
import { getEasyQuestions } from "./../services/easyQuestionsService";
import { getMiddleQuestions } from "./../services/middleQuestionsService";
import { getHardQuestions } from "./../services/hardQuestionsService";

export function combinedQuestions() {
  const easy = [...scramble(getEasyQuestions())];
  const middle = [...scramble(getMiddleQuestions())];
  const hard = [...scramble(getHardQuestions())];

  const combined = [
    ...easy.slice(0, 8),
    ...middle.slice(0, 6),
    ...hard.slice(0, 6)
  ];

  return combined;
}

const scramble = array => {
  const newArray = [...arrayScrambler(array)];
  newArray.map(i => {
    i.answers = [...arrayScrambler(i.answers)];
  });
  return newArray;
};
