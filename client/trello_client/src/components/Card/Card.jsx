import "./Card.css"

const Card = (card) => {
    const list = [card.value];
    console.log("card", list)
    return (
        <>

            {list.map((item, index) => (
                <div key={index} className="card-item">
                    <div >{item.image && <img className="card-cover" src={item.image} alt="" />}
                    {item.title}</div>
                </div>
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