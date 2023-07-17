import "./Column.css"
import Card from "../Card/Card.jsx"
import mapOrder from "../../utilities/sorts.js"
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ConfirmModal from "../Common/ConfirmModal";
import { useEffect, useRef, useState } from "react";
import { MODEL_ACTION_CLOSE, MODEL_ACTION_CONFIRM } from "../../utilities/constant.js"

//35.dk
export default function Column(column) {

    // const cards = column.column;
    const orderList = mapOrder(column.column.cards, column.column.cardOrder, "id")

    // console.log(title)
    const [isShowModelDelete, setisShowModelDelete] = useState(false);
    const [titleColumn, setTitleColumn] = useState("");
    const [isFistClick, setIsFistClick] = useState(true);
    const inputRef = useRef(null)

    useEffect(() => {
        if (column.column && column.column.title)
            setTitleColumn(column.column.title)
    }, [column.column])

    const toggleModel = () => {
        setisShowModelDelete(!isShowModelDelete)
    }
    const onModelAction = (type) => {
        if (type === MODEL_ACTION_CLOSE) {
            // do nothing
        }
        if (type === MODEL_ACTION_CONFIRM) {
            const newColumn = {
                ...column.column,
                _destroy: true // bu nesnenin silinmesi gerekiyor (true yaptığımızdan)
            }
            column.onUpdateColumn(newColumn)
            setisShowModelDelete(false)
        }
    }

    const selectAllText = (event) => {
        setIsFistClick(false)
        if (isFistClick) {
            event.target.select();
        }
        //event.target.focus();

    }

    const handleClickOutSide = () => {
        setIsFistClick(true);
        const newColumn = {
            ...column.column,
            title: titleColumn,
            _destroy: false
        }
        column.onUpdateColumn(newColumn)
    }

    return (
        <>
            <div className="column">
                <header className="column-drag-handle">

                    <div className="column-title">
                        <Form.Control
                            size={"sm"}
                            type="text"
                            value={titleColumn}
                            className="customize-input-column"
                            onClick={selectAllText}
                            onChange={event => setTitleColumn(event.target.value)}
                            spellCheck="false"
                            onBlur={handleClickOutSide}//focus dışına çıkıldığında mesela mouse ile başka bir alana tıklanıldığında burası tetiklernir
                            onMouseDown={e => e.preventDefault()}
                            ref={inputRef}
                        />
                    </div>
                    <div className="column-dropdown">

                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" size="sm">

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Add card</Dropdown.Item>
                                <Dropdown.Item onClick={toggleModel}>Remove this column</Dropdown.Item>
                                <Dropdown.Item href="#">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </header>
                <div className="card-list">
                    <Container
                        groupName="col"
                        onDrop={(dropResult) => column.onCardDrop(dropResult, column.column.id)}
                        getChildPayload={index => orderList[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"

                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {orderList && orderList.length > 0 ?

                            orderList.map((order) => (
                                <Draggable key={order.id}>
                                    <Card value={order} />
                                </Draggable>
                            )) : <></>}

                    </Container>
                    <div className="add-new-card">
                        <textarea rows={2}
                            className="form-control"
                            placeholder="Enter a title for this card..."
                        > 
                        </textarea>
                        <div className="group-btn">
                            <button className="btn btn-primary" >add card</button>
                            <i className="fa fa-times icon" ></i>
                        </div>
                    </div>

                </div>
                <footer>
                    <div className="footer-action">
                        <i className="fa fa-plus icon"></i> Add Another Card
                    </div>

                </footer>
            </div>
            <ConfirmModal
                show={isShowModelDelete}
                title={"Remove a column"}
                content={`are you sure to remove this column: <b>${column.column.title}<b/>`}
                onAction={onModelAction}

            />
        </>
    )
}
