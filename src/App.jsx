import 'sass-reset';
import './Main.scss'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AddTask from "./Components/AddTask/AddTask.jsx";
import TaskList from "./Components/TaskList/TaskList.jsx";

function App() {

  return (
    <>
      <section id="center">
        <Header />
          <AddTask/>
          <TaskList />
          <Footer />
      </section>
    </>
  )
}

export default App
