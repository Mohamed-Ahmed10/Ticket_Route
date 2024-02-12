import About from "./views/About"
import Contact from "./views/Contact"
import Homepage from "./views/Homepage"
import SiteNav from "./layout/SiteNav"
import { Routes, Route } from "react-router-dom"
import Reservation from "./views/Reservation"

function App() {

  return (
    <>
      <SiteNav />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/reservation" Component={Reservation} />
      </Routes>

    </>
  )
}

export default App
