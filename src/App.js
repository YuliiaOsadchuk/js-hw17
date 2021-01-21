import Timer from "./Timer";

const App = () => (
  <div>
    <Timer
      step={100}
      autoStart={true}
      onTimeEnd={() => console.log("Час вийшов!")}
      onTimeStart={(timeLeft) => {
        console.log("Таймер запущено! ", timeLeft);
      }}
      onTimePause={(timeLeft) => {
        console.log("Таймер на паузі! ", timeLeft);
      }}
    />
    <Timer
      step={500}
      autoLoop={true}
      onTimeEnd={() => console.log("Час вийшов!")}
      onTimeStart={(timeLeft) => {
        console.log("Таймер запущено! ", timeLeft);
      }}
      onTimePause={(timeLeft) => {
        console.log("Таймер на паузі! ", timeLeft);
      }}
    />
    <Timer
      autoLoop={false}
      startTime={500000}
      onTimeEnd={() => console.log("Час вийшов!")}
      onTimeStart={(timeLeft) => {
        console.log("Таймер запущено! ", timeLeft);
      }}
      onTimePause={(timeLeft) => {
        console.log("Таймер на паузі! ", timeLeft);
      }}
    />
  </div>
);

export default App;
