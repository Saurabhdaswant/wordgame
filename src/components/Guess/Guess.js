import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { answer } from "../Game/Game";

const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>
}

function Guess({ guess }) {
  const result = checkGuess(guess, answer)


  return <p className="guess">
    {
      range(5).map((num) => {
        const letter = result ? result[num].letter : undefined
        const status = result ? result[num].status : undefined

        return <Cell key={num} letter={letter} status={status} />
      })
    }
  </p>;
}

export default Guess;
