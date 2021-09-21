
function App() {
  const channel = "Website Tutorial Reactjs";
  const age = 20;
  const link = "https://ahmadfaqih-dev.github.io/";

  return (
    <div>
      <h1>Welcome to {channel}</h1>
      <h2>{age * 2}</h2>
      <a href={link}>My Website</a>
    </div>
  );
}

export default App;
