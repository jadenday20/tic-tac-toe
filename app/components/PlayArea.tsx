'use client'

import PlaySpace from "./PlaySpace";
import { useState } from "react";

export default function PlayArea() {
    const [player, setPlayer] = useState(1);

    const togglePlayer = () => {
        setPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
    };

    const mark = (cell: { column: number; row: number; player: number; }) => {
        if (cellIsEmpty(cell)) {
            // Do something when the cell is empty
            let cellContents = document.querySelector(`#space-${cell.column}-${cell.row} > p`)
            if (cellContents){
                if (player == 1){
                    cellContents.innerHTML = "X";
                }
                else if (player == 2){
                    cellContents.innerHTML = "O";
                }
                togglePlayer();

            }
        }
    };

    const cellIsEmpty = (cell: { column: number; row: number; player: number; }) => {
        let cellContents = document.querySelector(`#space-${cell.column}-${cell.row} > p`)
        if (cellContents && cellContents.innerHTML == null || cellContents?.innerHTML == ""){
            return true;
        }
    };

    return (
        <>
            <h2 id="playerMarker" className="text-2xl font-semibold text-center mb-2">Player {player}</h2>
            <div className="grid-cols-3 grid-rows-3 border-black border-2 grid gap-1 w-fit">
            {[1, 2, 3].map((column) =>
                    [1, 2, 3].map((row) => (
                        <div key={`${column}-${row}`} id={`space-${column}-${row}`} className={`play-space col-start-${column} row-start-${row}`} onClick={() => mark({ column, row, player })}>
            <p></p>
        </div>
                    ))
                )}
            </div>
        </>
    );
  }
  