import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtist from "../guess-artist/guess-artist.jsx";
import GuessGenre from "../guess-genre/guess-genre.jsx";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isGameStarted: false,
      currentQuestion: 0,
      userAnswers: []
    };
    this.startGame = this.startGame.bind(this);
    this.onAnswerHandler = this.onAnswerHandler.bind(this);
  }

  startGame() {
    this.setState({isGameStarted: true, currentQuestion: 1});
  }

  finishGame() {
    this.setState({isGameStarted: false});
  }

  canGoNextLevel() {
    const {questions} = this.props;
    const {currentQuestion} = this.state;

    return currentQuestion < questions.length;
  }

  goNextQuestion() {
    const {currentQuestion} = this.state;

    this.setState({currentQuestion: currentQuestion + 1});
  }

  onAnswerHandler(answer) {
    const {userAnswers} = this.state;
    const newUserAnswers = userAnswers.slice();
    newUserAnswers.push(answer);

    this.setState({userAnswers: newUserAnswers});

    if (this.canGoNextLevel()) {
      this.goNextQuestion();
    } else {
      this.finishGame();
    }
  }

  getWelcomeScreen() {
    const {gameTime, errorCount} = this.props;

    return (
      <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        startGame={this.startGame}
      />
    );
  }

  getQuestion() {
    const {questions} = this.props;
    const {currentQuestion} = this.state;

    const currentQuestionIndex = currentQuestion - 1;
    const {type: questionType} = questions[currentQuestionIndex];

    switch (questionType) {
      case `artist`:
        return (
          <GuessArtist
            question={questions[currentQuestionIndex]}
            onAnswer={this.onAnswerHandler}
          />
        );
      case `genre`:
        return (
          <GuessGenre
            question={questions[currentQuestionIndex]}
            onAnswer={this.onAnswerHandler}
          />
        );
    }

    return null;
  }

  render() {
    return this.state.isGameStarted
      ? this.getQuestion()
      : this.getWelcomeScreen();
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  startGame: PropTypes.func,
  questions: PropTypes.array
};
