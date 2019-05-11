import React from "react";
import renderer from "react-test-renderer";
import GuessGenre from "./guess-genre";

it(`should render GuessGenre properly`, () => {
  const onAnswer = jest.fn();
  const question = {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`
      }
    ]
  };

  const componentGuessGenre = renderer
    .create(<GuessGenre question={question} onAnswer={onAnswer} />)
    .toJSON();

  expect(componentGuessGenre).toMatchSnapshot();
});
