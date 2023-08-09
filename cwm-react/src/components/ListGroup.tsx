import { MouseEvent } from "react";

function ListGroup() {

    const items = ["New York", "Tokyo", "London", "Paris"]

    const handleClick = (event: MouseEvent) => console.log(event)

  return (<>
    <h1>List</h1>
    {items.length === 0 ? <p>No Item Found</p> : null}
    <ul className="list-group-item">
    {items.map((item, index) => 
    <li 
    key={item} 
    onClick={handleClick}>
      
      {item}
      
      </li>)}
    </ul>
  </>);
}

export default ListGroup;
