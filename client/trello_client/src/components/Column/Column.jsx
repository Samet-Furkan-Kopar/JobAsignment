import "./Column.css"
import Card from "../Card/Card.jsx"
import mapOrder from "../../utilities/sorts.js"
import { Container, Draggable } from "react-smooth-dnd";


export default function Column(column) {
    const cards = column.column;
    const orderList = mapOrder(column.column.cards, column.column.cardOrder, "id")
    console.log(orderList)

    const onCardDrop = (dropResult) => {
        console.log(">>> inside on carDrop", dropResult)
    }


    return (
        <>
            <div className="column">
                <header className="column-drag-handle">{column.column.title}</header>
                <div className="card-list">
                    <Container

                        groupName="col"
                        onDragStart={e => console.log("drag started", e)}
                        onDragEnd={e => console.log("drag end", e)}
                        onDrop={onCardDrop}
                        getChildPayload={index => cards[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        onDragEnter={() => {
                            console.log("drag enter:", column.id);
                        }}
                        onDragLeave={() => {
                            console.log("drag leave:", column.id);
                        }}
                        onDropReady={p => console.log('Drop ready: ', p)}
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {/*column.column bunu göndermeyi denecolumn.column && column.column.map((card) => {

                        <Card key={card.id} value={card} />

                               ///2 burayı aktif etmeye çalış çünkü verileri mapleyerek göndermediğinden sürüklerken tüm içerik gidiyor
                    }) */}

                        <Draggable key={cards.id}>
                            <Card value={cards} />
                        </Draggable>
                    </Container>

                </div>
                <footer>Another card</footer>
            </div>
        </>
    )
}
