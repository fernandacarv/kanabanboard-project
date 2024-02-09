
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import KanbanBoard from './components/KanbanBoard';
import Column from './components/Column';
import Task from './components/Task';

function App() {

  return (
      <div className='App'>

        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Footer></Footer>
      <section>
        <KanbanBoard/>
      </section>



      </div>


  )
}

export default App
