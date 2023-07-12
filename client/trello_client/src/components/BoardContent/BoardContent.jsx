import "./BoardContent.css"
import Column from "../Column/Column.jsx"
import { initData } from "../Actions/initData.js"
import { useEffect, useState } from "react"
import _ from "lodash"
import mapOrder from "../../utilities/sorts.js"

export default function BoardContent() {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardInitData = initData.boards.find(item => item.id === 'board-1')
        if (boardInitData) {
            setBoard(boardInitData);


          

        //  boardInitData.columns.sort((a,b)=> boardInitData.columnOrder.indexOf(a.id) - boardInitData.columnOrder.indexOf(b.id))
        //  console.log(boardInitData.columns)
            setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, "id"));
            
        }
    }, [])
    
    if (_.isEmpty(board)) {
        return (
            <>
                <div className="not-found">
                    Board Not Found
                </div>
            </>
        )
    }

    return (
        <><div className="board-columns">

            {columns && columns.length > 0 && columns.map((column) => {
                return (
                    <Column key={column.id} column={column} />
                )
            })}



        </div></>
    )
}
