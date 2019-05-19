import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({adapter: new Adapter()});

const onClick = jest.fn();
const src = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;
const audioPlayer = mount(
    <AudioPlayer src={src} isPlaying={false} onPlayButtonClick={onClick} />
);
const button = audioPlayer.find(`.track__button`);

window.HTMLMediaElement.prototype.pause = () => {};
audioPlayer.setState({isLoading: false});

describe(`AudioPlayer`, () => {
  it(`should change isPlaying state after clicking the button`, () => {
    button.simulate(`click`, {preventDefault() {}});

    expect(audioPlayer.state(`isPlaying`)).toEqual(true);
  });

  it(`should return the previous isPlaying state after the second clicking the button`, () => {
    button.simulate(`click`, {preventDefault() {}});

    expect(audioPlayer.state(`isPlaying`)).toEqual(false);
  });
});
