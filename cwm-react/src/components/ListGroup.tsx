// { items: [], heading: string}
import "./ListGroup.css"

interface ListGroupProps {
  items: string[]
  heading: string
  // function that takes item: string and returns void
  onSelectItem: (item: string) => void
}

import { useState } from "react";

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {


    const [selectedIndex, setSelectedIndex] = useState(-1)

    

  return (<>
    <h1>{heading}</h1>
    {items.length === 0 ? <p>No Item Found</p> : null}
    <ul className="list-group">
    {items.map((item, index) => 
    <li
    className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
    key={item} 
    onClick={() => {
      setSelectedIndex(index)
      onSelectItem(item)
      }}>
      
      {item}
      
      </li>)}
    </ul>
  </>);
}

export default ListGroup;
