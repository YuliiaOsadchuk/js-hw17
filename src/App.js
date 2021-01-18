import Timer from "./Timer";

function App() {
  return (
    <div>
      <Timer
        step={100}
        autoStart={true}
        onTimeEnd={() => console.log("Час вийшов!")}
        onTimeStart={(timeLeft) => {
          console.log("Таймер запущено!");
        }}
        onTimePause={(timeLeft) => {
          console.log("Таймер на паузі!");
        }}
      />
      <Timer
        step={500}
        autoLoop={true}
        onTimeEnd={() => console.log("Час вийшов!")}
        onTimeStart={(timeLeft) => {
          console.log("Таймер запущено!");
        }}
        onTimePause={(timeLeft) => {
          console.log("Таймер на паузі!");
        }}
      />
      <Timer
        autoLoop={false}
        startTime={500000}
        onTimeEnd={() => console.log("Час вийшов!")}
        onTimeStart={(timeLeft) => {
          console.log("Таймер запущено!");
        }}
        onTimePause={(timeLeft) => {
          console.log("Таймер на паузі!");
        }}
      />
    </div>
  );
}

export default App;
