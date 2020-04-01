import { arrayScrambler } from "./arrayScrambler";
import { getEasyQuestions } from "./../services/easyQuestionsService";
import { getMiddleQuestions } from "./../services/middleQuestionsService";
import { getHardQuestions } from "./../services/hardQuestionsService";

export function combinedQuestions() {
  const easy = [...scramble(getEasyQuestions())];
  const middle = [...scramble(getMiddleQuestions())];
  const hard = [...scramble(getHardQuestions())];

  const combined = [...pop(easy, 8), ...pop(middle, 6), ...pop(hard, 6)];
  return combined;
}

const scramble = array => {
  const newArray = [...arrayScrambler(array)];
  newArray.map(i => {
    i.answers = [...arrayScrambler(i.answers)];
  });
  return newArray;
};

const pop = (array, number) => {
  const poppedArray = [...array];

  for (let i = 0; i < number; i++) {
    poppedArray.pop();
  }

  //slice

  return poppedArray;
};
