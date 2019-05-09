import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const startGame = () => {};

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
        onClick={startGame}
      />,
      document.querySelector(`.main`)
  );
};

init();
