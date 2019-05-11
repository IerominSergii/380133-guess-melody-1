import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {questions} from "./mocks/questions";

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
        questions={questions}
      />,
      document.querySelector(`.main`)
  );
};

init();
