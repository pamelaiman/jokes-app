export default function Joke(JokesData) {
    return(
        <div>
            <h2>{JokesData.setup}</h2>
            <p>{JokesData.punchline}</p>
        </div>
    )
}