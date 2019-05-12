import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessArtist from "./guess-artist";

Enzyme.configure({adapter: new Adapter()});

const onAnswer = jest.fn();
const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `path.mp3`
  },
  answers: [
    {
      picture: `path`,
      artist: `John Snow`
    }
  ]
};

it(`should call the onAnswer when user makes a choice`, () => {
  const guessArtist = mount(
      <GuessArtist question={question} onAnswer={onAnswer} />
  );

  const inputs = guessArtist.find(`.artist__input`);
  inputs.simulate(`click`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
});
