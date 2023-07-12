import "./Card.css"

const Card = (card) => {
    const list = card.value.cards;
    console.log(card.value.cards)
    return (
        <>

            

            
                {list.map((item, index) => (
                    <li key={index} className="card-item">
                        {item.title}
                    </li>
                ))}
           

            {/* <li className="card-item">
            {list.map((list)=>{
              return  list.title
            })}
            </li> */}

        </>
    )
}

export default Card;