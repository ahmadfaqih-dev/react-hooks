import Header from './components/Header'

function App() {
  const channel = "Website Tutorial Reactjs";
  const age = 20;
  const link = "https://ahmadfaqih-dev.github.io/";

  const clickMe = (name) => {
    console.log('Hello'+ name);
  }

  return (
    <div>
      <Header />
      <h1>Welcome to {channel}</h1>
      <h2>{age * 2}</h2>
      <a href={link}>My Website</a>
      <button onClick={ () => clickMe ('Faqih') }>Click Me</button>
    </div>
  );
}

export default App;
