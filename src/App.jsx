import Joke from "./Joke.jsx";
import JokesData from "./JokesData.jsx"

export default function App() {
  const JokesElement = JokesData.map(joke => {
    return <Joke key = {joke.id} setup={joke.setup} punchline={joke.punchline}/>
  }
)

  return (
    <div>
      <h1 className="title">Pamela&apos;s Jokes</h1>
      {JokesElement}
    </div>
  );
}
