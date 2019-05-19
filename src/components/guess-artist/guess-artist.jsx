import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GuessArtist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };

    this._onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler(evt) {
    evt.preventDefault();
    this.props.onAnswer(evt.target.value);
  }

  render() {
    const {question} = this.props;
    const {isPlaying} = this.state;
    const {song, answers} = question;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img
              className="game__logo"
              src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"
            />
          </a>

          {`<svg
        xmlns="http://www.w3.org/2000/svg"
        className="timer"
        viewBox="0 0 780 780"
      >
        <circle
          className="timer__line"
          cx="390"
          cy="390"
          r="370"
          style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"
        />
      </svg>`}

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <AudioPlayer
            src={song.src}
            isPlaying={isPlaying}
            onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
          />

          <form className="game__artist">
            {answers.map((answer, index) => {
              return (
                <div key={`${answer.artist}-${index}`} className="artist">
                  <input
                    className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    value={answer.artist}
                    id="answer-1"
                    onClick={this._onClickHandler}
                  />
                  <label className="artist__name" htmlFor="answer-1">
                    <img
                      className="artist__picture"
                      src={answer.picture}
                      alt={answer.artist}
                    />
                    {answer.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    );
  }
}

export default GuessArtist;

GuessArtist.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func
};
