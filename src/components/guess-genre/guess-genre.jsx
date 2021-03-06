import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

export default class GuessGenre extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: -1
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.state.value);
  }

  render() {
    const {question} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img
              className="game__logo"
              src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"
            />
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="timer"
            viewBox="0 0 780 780"
          >
            {`<circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"
          />`}
          </svg>

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
          <h2 className="game__title">{`Выберите ${genre} треки`}</h2>
          <form className="game__tracks" onSubmit={this._handleSubmit}>
            {answers.map((track, index) => {
              return (
                <div key={`${track.genre}-${index}`} className="track">
                  <AudioPlayer
                    src={track.src}
                    isPlaying={index === this.state.activePlayer}
                    onPlayButtonClick={() =>
                      this.setState({
                        activePlayer:
                          this.state.activePlayer === index ? -1 : index
                      })
                    }
                  />
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={track.genre}
                      id={`answer-${index + 1}`}
                      onChange={this._handleChange}
                    />
                    <label
                      className="game__check"
                      htmlFor={`answer-${index + 1}`}
                    >
                      Отметить
                    </label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">
              Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenre.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func
};
