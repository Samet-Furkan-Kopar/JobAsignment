import "./Column.css"
import Card from "../Card/Card.jsx"
import mapOrder from "../../utilities/sorts.js"
import { Container, Draggable } from "react-smooth-dnd";


export default function Column(column) {

    //const cards = column.column;
    const orderList = mapOrder(column.column.cards, column.column.cardOrder, "id")
   
  // console.log(column.onCardDrop)
    // column.column.cards = orderList;
    // console.log(orderList)//orderlistin parentini göndermek lazım
    // const cards = column.column;
    //console.log("cards", cards)

 

    return (
        <>
            <div className="column">
                <header className="column-drag-handle">{column.column.title}</header>
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


                        {/* <Draggable key={cards.id}>
                                <Card value={cards} />
                            </Draggable> */}

                    </Container>

                </div>
                <footer>
                    <div className="footer-action">
                    <i className="fa  fa-plus icon"></i> Add Another Card
                    </div>
                    
                </footer>
            </div>
        </>
    )
}
