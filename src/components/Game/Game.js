import React, { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [status, setStatus] = useState("running")

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} status={status} setStatus={setStatus} />
      {status === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  )
}

export default Game;
