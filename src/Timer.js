import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer({
  startTime = 10000,
  step = 1000,
  autoStart = false,
  autoLoop = false,
  onTick = () => {},
  onTimeEnd = () => {},
  onTimeStart = () => {},
  onTimePause = () => {},
}) {
  const [timerId, setTimerId] = useState(null);
  const [currentTime, setCurrentTime] = useState(startTime);

  useEffect(() => autoStart && start(), []);

  useEffect(() => {
    if (currentTime < 0) {
      stop();
      onTimeEnd();
      setCurrentTime(startTime);
      autoLoop && start();
    }
  });

  const start = () => {
    const timerId = setInterval(handleTick, step);
    setTimerId(timerId);
  };

  const stop = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  function handleStartTimer() {
    start();
    onTimeStart(startTime);
  }

  function handlePauseTimer() {
    stop();
    onTimePause(currentTime);
  }

  function handleTick() {
    setCurrentTime((currentTime) => currentTime - step);
    onTick(currentTime - step);
  }

  return (
    <div className="timer">
      <div className="buttons-group">
        {!timerId && (
          <button className="button start-button" onClick={handleStartTimer}>
            Start
          </button>
        )}
        {timerId && (
          <button className="button pause-button" onClick={handlePauseTimer}>
            Pause
          </button>
        )}
      </div>
      <div className="time">{currentTime}</div>
      <progress
        className="progress-line"
        max={startTime}
        value={currentTime}
      ></progress>
    </div>
  );
}

export default Timer;
