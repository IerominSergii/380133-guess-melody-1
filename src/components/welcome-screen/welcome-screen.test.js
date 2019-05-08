import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`should render WelcomeScreen properly`, () => {
  const componentWelcomeScreen = renderer
    .create(<WelcomeScreen time={5} errorCount={3} />)
    .toJSON();

  expect(componentWelcomeScreen).toMatchSnapshot();
});
