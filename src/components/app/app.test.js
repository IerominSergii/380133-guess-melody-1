import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`should render App component correctly`, () => {
  const app = renderer.create(<App gameTime={5} errorCount={3} />).toJSON();

  expect(app).toMatchSnapshot();
});
