import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { answer } from "../Game/Game";

function GuessInput({ guesses, setGuesses, status, setStatus }) {
  const [guess, setGuess] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (guess.length !== 5) {
      window.alert("Please add min 5 letters")
      return
    }

    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess === answer) {
      setStatus("won")
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost")
    } else {
      setStatus("running")
    }

    setGuess("")
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={status !== "running"} required minLength="5" maxLength="5" value={guess} onChange={(e) => {
        const nextGuess = e.target.value.toUpperCase()
        setGuess(nextGuess)
      }} id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
