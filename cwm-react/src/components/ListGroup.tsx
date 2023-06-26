function ListGroup() {

    const items = ["New York", "Tokyo", "London", "Paris"]

  return (<>
    <h1>List</h1>
    {items.length === 0 ? <p>No Item Found</p> : null}
    <ul className="list-group">
    {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  </>);
}

export default ListGroup;
