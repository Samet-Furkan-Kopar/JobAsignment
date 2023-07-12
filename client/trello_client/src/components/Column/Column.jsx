import "./Column.css"
import Card from "../Card/Card.jsx"
export default function Column(column) {
    //const cards = column.column.cards;
    //  console.log(column.column)
    return (
        <>
            <div className="column">
                <header>{column.column.title}</header>
                <ul className="card-list">

                     {/*column.column bunu göndermeyi denecolumn.column && column.column.map((card) => {

                        <Card key={card.id} value={card} />


                    }) */} 
                <Card key={column.column.id} value={column.column}/>
                      

                </ul>
                <footer>Another card</footer>
            </div>
        </>
    )
}
