
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import KanbanBoard from './components/KanbanBoard';
import Column from './components/Column';


function App() {

  return (
      <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Footer></Footer>
      </div>


  )
}

export default App
