
import './App.css'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Message2 from './components/Message2'
function App() {

  const items = ["New York", "Tokyo", "London", "Paris"]
  const handleSelectItem = (item: string) => {console.log(item)}

  return <div>
    {/* <ListGroup items = {items} heading={"Cities"} onSelectItem={handleSelectItem}/> */}
    {/* <Alert>
      Hello <span>World</span>
    </Alert> */}
    <Message2/>

  </div>
}

export default App
