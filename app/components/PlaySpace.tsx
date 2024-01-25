export default function PlaySpace(props: { column: number; row: number; player: number }) {
    const { column, row, player } = props;

    const mark = (cell: { column: number; row: number; player: number; }) => {
        if (cellIsEmpty(cell)) {
            // Do something when the cell is empty
            let cellContents = document.querySelector(`#space-${column}-${row} > p`)
            if (cellContents){
                if (player == 1){
                    cellContents.innerHTML = "X";
                }
                else if (player == 2){
                    cellContents.innerHTML = "O";
                }
            }
        }
    };

    const cellIsEmpty = (cell: { column: number; row: number; player: number; }) => {
        let cellContents = document.querySelector(`#space-${column}-${row} > p`)
        if (cellContents && cellContents.innerHTML == null || cellContents?.innerHTML == ""){
            return true;
        }
    };
    
    return (
        <div id={`space-${column}-${row}`} className={`play-space col-start-${column} row-start-${row}`} onClick={() => mark({ column, row, player })}>
            <p></p>
        </div>
    );
  }
  