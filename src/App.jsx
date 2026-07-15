import 'sass-reset';
import './Main.scss'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AddTask from "./Components/AddTask/AddTask.jsx";

function App() {

  return (
    <>
      <section id="center">
        <Header />
          <AddTask/>
          <Footer />
      </section>
    </>
  )
}

export default App
