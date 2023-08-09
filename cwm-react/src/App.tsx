
import './App.css'
import ListGroup from './components/ListGroup'
function App() {
  const items = ["New York", "Tokyo", "London", "Paris"]
  return <div>
    <ListGroup items = {items} heading={"Cities"}/>
  </div>
}

export default App
