import "./Column.css"
import Card from "../Card/Card.jsx"
import mapOrder from "../../utilities/sorts.js"
export default function Column(column) {
    const cards = column.column;
     const orderList = mapOrder(column.column.cards,column.column.cardOrder,"id")
      console.log(orderList)
    return (
        <>
            <div className="column">
                <header>{column.column.title}</header>
                <ul className="card-list">

                     {/*column.column bunu göndermeyi denecolumn.column && column.column.map((card) => {

                        <Card key={card.id} value={card} />


                    }) */} 
                <Card key={cards.id} value={cards}/>
                      

                </ul>
                <footer>Another card</footer>
            </div>
        </>
    )
}
