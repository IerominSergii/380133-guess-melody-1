import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessGenre from "./guess-genre";

Enzyme.configure({adapter: new Adapter()});

const onAnswer = jest.fn();
const submitForm = jest.fn();
const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path`,
      genre: `rock`
    }
  ]
};

it(`should call the onAnswer when user makes a choice`, () => {
  const guessGenre = shallow(
      <GuessGenre question={question} onAnswer={onAnswer} />
  );

  const gameForm = guessGenre.find(`.game__tracks`);
  gameForm.simulate(`submit`, {preventDefault: submitForm});

  expect(submitForm).toHaveBeenCalledTimes(1);
  expect(onAnswer).toHaveBeenCalledTimes(1);
});
