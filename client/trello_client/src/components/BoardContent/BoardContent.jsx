import "./BoardContent.css"
import Column from "../Column/Column.jsx"
import { initData } from "../Actions/initData.js"
import { useEffect, useState } from "react"
import _ from "lodash"
import mapOrder from "../../utilities/sorts.js"
import applyDrag from "../../utilities/dragDrop.js"
import { Container, Draggable } from "react-smooth-dnd";

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

    const onColumnDrop = (dropResult) => {

        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult)
        //todo ların yerini değiştirmek için 

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(column => column.id)
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);

    }

    const onCardDrop = (dropResult, columnId) => {

        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            console.log(">>> inside on carDrop", dropResult, "with columnId", columnId)

            let newColumns = [...columns];

            let currentColumn = newColumns.find(column => column.id === columnId)
            // console.log("currentColumns: ", currentColumn)
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(card => card.id);
            setBoard(newColumns);
        }

    }


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
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                getChildPayload={index => columns[index]}//onColumnDrop sayesinde consolda payload altında id görünüyor
                dragHandleSelector=".column-drag-handle"//columnda headerın classname i 
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'column-drop-preview'
                }}
            >
                {columns && columns.length > 0 && columns.map((column) => {
                    return (
                        <Draggable key={column.id}>
                            <Column column={column} onCardDrop={onCardDrop} />
                        </Draggable>
                    )
                })}


            </Container>
        </div></>
    )
}
