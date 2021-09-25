import { useState  } from 'react';
import Header from './components/Header'

function App() {
  const [channel, setChannel] = useState("Website Tutorial Reactjs");
  const [age, setAge] = useState(20);
  const link = "https://ahmadfaqih-dev.github.io/";

  const clickMe = (name) => {
    console.log('Hello'+ name);
  }

  const changeChannel = () => {
    setChannel("React JS Dasar");
    setAge(25);
  }

  return (
    <div>
      <Header />
      <h1>Welcome to {channel}</h1>
      <h2>Umur: {age}</h2>
      <a href={link}>My Website</a>
      <button onClick={ () => clickMe ('Faqih') }>Click Me</button>
      <button onClick={changeChannel}>Change Titile</button>
    </div>
  );
}

export default App;
