import React from "react";
import renderer from "react-test-renderer";
import GuessGenre from "./guess-genre";

it(`should render GuessGenre properly`, () => {
  const question = {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path.mp3`,
        genre: `rock`
      },
      {
        src: `path.mp3`,
        genre: `pop`
      },
      {
        src: `path.mp3`,
        genre: `jazz`
      },
      {
        src: `path.mp3`,
        genre: `rock`
      }
    ]
  };

  const componentGuessGenre = renderer
    .create(<GuessGenre question={question} onAnswer={jest.fn()} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(componentGuessGenre).toMatchSnapshot();
});
