import "./Card.css"

const Card = (card) => {
    const list = card.value.cards;
    // console.log(list)
    return (
        <>

            {list.map((item, index) => (
                <li key={index} className="card-item">
                    {item.image && <img className="card-cover" src={item.image} alt="" />}
                    { item.title }
                </li>
            ))}


            {/* {list.map((item, index) => (
                    
                    <li key={index} className="card-item">
                     {  item.image &&  <img className="card-cover" src={item.image} alt="" /> } ? {item.title} : {"not found"}
                     
                    </li>
                ))} */}

            {/* <li className="card-item">
            {list.map((list)=>{
              return  list.title
            })}
            </li> */}

        </>
    )
}

export default Card;