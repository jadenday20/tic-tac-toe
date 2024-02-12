'use client'

import { useState } from "react";

export default function PlayArea() {
    const [player, setPlayer] = useState(1);

    const togglePlayer = () => {
        setPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
    };

    const mark = (cell: { column: number; row: number; player: number; }) => {
        if (cellIsEmpty(cell)) {
            // Do something when the cell is empty
            document.querySelector(`#space-${cell.column}-${cell.row}`)?.classList.toggle("empty-space")
            let cellContents = document.querySelector(`#space-${cell.column}-${cell.row} > p`)
            if (cellContents){
                if (player == 1){
                    cellContents.innerHTML = "X";
                }
                else if (player == 2){
                    cellContents.innerHTML = "O";
                }
                togglePlayer();
                checkWinner()
                if (BoardIsFull()){
                    let endgame:any = document.querySelector(".game-end-msg");
                    let endgameP:any = document.querySelector(".result");
                    endgameP.textContent = "It's a Draw!";
                    endgame.style.display = "flex";
                }

            }
        }
    };
    function checkWinner() {
        // Check rows
        for (let row = 1; row <= 3; row++) {
            checkLine(`[id^="space-${row}"] p`);
        }
    
        // Check columns
        for (let col = 1; col <= 3; col++) {
            checkLine(`[id$="-${col}"] p`);
        }
    
        // Check diagonals
        checkLine(`[id^="space-1-"][id$="-1"] p, [id^="space-2-"][id$="-2"] p, [id^="space-3-"][id$="-3"] p`); // Top-left to bottom-right diagonal
        checkLine(`[id^="space-1-"][id$="-3"] p, [id^="space-2-"][id$="-2"] p, [id^="space-3-"][id$="-1"] p`); // Top-right to bottom-left diagonal
    
        function checkLine(selector: string) {
            let boardContents = document.querySelectorAll(selector);
            let OCount = 0;
            let XCount = 0;
    
            for (let i = 0; i < boardContents.length; i++) {
                if (boardContents[i].innerHTML === "O") {
                    OCount++;
                } else if (boardContents[i].innerHTML === "X") {
                    XCount++;
                }
            }
    
            if (OCount === 3) {
                let endgame:any = document.querySelector(".game-end-msg");
                let endgameP:any = document.querySelector(".result");
                endgameP.textContent = "O Wins!";
                endgame.style.display = "flex";
            } else if (XCount === 3) {
                let endgame:any = document.querySelector(".game-end-msg");
                let endgameP:any = document.querySelector(".result");
                endgameP.textContent = "X Wins!";
                endgame.style.display = "flex";
            }
        }
    }
    const cellIsEmpty = (cell: { column: number; row: number;}) => {
        let cellContents = document.querySelector(`#space-${cell.column}-${cell.row} > p`)
        if (cellContents && cellContents.innerHTML == null || cellContents?.innerHTML == ""){
            return true;
        }
    };
    const BoardIsFull = () => {
        let cells = document.querySelectorAll(".empty-space")
        if (cells.length == 0){
            return true;
        }

    };

    return (
        <>
            <div className="game-end-msg" onClick={() => window.location.reload()}>
                <p className="result"></p>
                <p className="close-msg">Click Anywhere to Start Another Game</p>
            </div>
            <h2 id="playerMarker" className="text-2xl font-semibold text-center mb-2">Player {player}</h2>
            <div className="grid-cols-3 grid-rows-3 border-black border-2 grid gap-1 w-fit">
            {[1, 2, 3].map((column) =>
                    [1, 2, 3].map((row) => (
                        <div key={`${column}-${row}`} id={`space-${column}-${row}`} className={`play-space empty-space col-start-${column} row-start-${row}`} onClick={() => mark({ column, row, player })}>
            <p></p>
        </div>
                    ))
                )}
            </div>
        </>
    );
  }
  