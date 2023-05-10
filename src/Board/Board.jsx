import { useEffect, useState } from "react";
import "./Board.css";

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board = () => {
  const [val, setValue] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  const [turn, setTurn] = useState(1);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("Player 1 turn");

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = win[i];
      if (val[a] !== -1 && val[a] === val[b] && val[b] === val[c]) {
        setStatus(1);
        setMessage(`Player ${turn ? 2 : 1} Won!`);
        return;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (val[i] === -1) return;
    }
    setStatus(2);
    setMessage("Match Draw!");
  }, [turn]);

  function handleClick(index) {
    if (status) return;
    const newValue = val;
    if (newValue[index] !== -1) return;
    if (turn) {
      newValue[index] = "X";
    } else {
      newValue[index] = "O";
    }
    setValue(newValue);
    setTurn(!turn);
    if (!status) setMessage(`Player ${turn ? 2 : 1} Turn`);
  }
  return (
    <>
      <div className="txt">{message}</div>
      <div className="parent">
        <div className="row">
          <div className="box" onClick={() => handleClick(0)}>
            {val[0] !== -1 && val[0]}
          </div>
          <div className="box" onClick={() => handleClick(1)}>
            {val[1] !== -1 && val[1]}
          </div>
          <div className="box" onClick={() => handleClick(2)}>
            {val[2] !== -1 && val[2]}
          </div>
        </div>
        <div className="row">
          <div className="box" onClick={() => handleClick(3)}>
            {val[3] !== -1 && val[3]}
          </div>
          <div className="box" onClick={() => handleClick(4)}>
            {val[4] !== -1 && val[4]}
          </div>
          <div className="box" onClick={() => handleClick(5)}>
            {val[5] !== -1 && val[5]}
          </div>
        </div>
        <div className="row">
          <div className="box" onClick={() => handleClick(6)}>
            {val[6] !== -1 && val[6]}
          </div>
          <div className="box" onClick={() => handleClick(7)}>
            {val[7] !== -1 && val[7]}
          </div>
          <div className="box" onClick={() => handleClick(8)}>
            {val[8] !== -1 && val[8]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
