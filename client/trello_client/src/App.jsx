import './App.css'
import AppBar from "./components/AppBar/AppBar.jsx"
import BoardBar from "./components/BoardBar/BoardBar.jsx"
import BoardContent from "./components/BoardContent/BoardContent.jsx"
function App() {


  return (
    <>
      <div className="trello-master">
        <AppBar />
        <BoardBar />
        <BoardContent />

      </div>
    </>
  )
}

export default App
