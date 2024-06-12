import Joke from "./Joke.jsx";

export default function App() {
  return (
    <div>
      <h1 className="title">Pamela&apos;s Jokes</h1>
      <Joke
        setup="Why don't scientists trust atoms?"
        punchline="Because they make up everything!"
      />
      <Joke
        setup="Why did the scarecrow win an award?"
        punchline="Because he was outstanding in his field!"
      />
      <Joke
        setup="What do you call fake spaghetti?"
        punchline="An impasta!"
      />
      <Joke
        setup="Why don't skeletons fight each other?"
        punchline="They don't have the guts."
      />
      <Joke
        setup="What do you call cheese that isn't yours?"
        punchline="Nacho cheese!"
      />
    </div>
  );
}
