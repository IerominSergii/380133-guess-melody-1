import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {gameTime, errorCount, onClick} = props;

  return (
    <WelcomeScreen time={gameTime} errorCount={errorCount} onClick={onClick} />
  );
};

export default App;

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onClick: PropTypes.func
};
