import './App.css'
import AppBar from "./components/AppBar/AppBar.jsx"
import BoardBar from "./components/BoardBar/BoardBar.jsx"
import BoardContent from "./components/BoardContent/BoardContent.jsx"
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
