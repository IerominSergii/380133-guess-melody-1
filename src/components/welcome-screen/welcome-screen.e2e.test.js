import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

const clickHandler = jest.fn();

describe(`enzyme test`, () => {
  it(`should render WelcomeScreen correctly`, () => {
    const welcomeScreen = shallow(
        <WelcomeScreen time={5} errorCount={3} startGame={clickHandler} />
    );

    const startButton = welcomeScreen.find(`.welcome__button`);
    startButton.simulate(`click`, {preventDefault() {}});

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
