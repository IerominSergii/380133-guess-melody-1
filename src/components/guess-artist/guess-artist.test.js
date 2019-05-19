import React from "react";
import renderer from "react-test-renderer";
import GuessArtist from "./guess-artist";

it(`should render GuessArtist properly`, () => {
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

  const componentGuessArtist = renderer
    .create(<GuessArtist question={question} onAnswer={onAnswer} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(componentGuessArtist).toMatchSnapshot();
});
