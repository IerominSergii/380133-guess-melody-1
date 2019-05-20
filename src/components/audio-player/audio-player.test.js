import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";

it(`should render AudioPlayer properly`, () => {
  const component = renderer
    .create(
        <AudioPlayer
          isPlaying={false}
          src={`path.mp3`}
          onPlayButtonClick={jest.fn()}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
