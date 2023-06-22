import HomePage from './routes/HomePage'
import BookingPage from './routes/BookingPage';
import About from './routes/About';
import Order from './routes/Order';
import Reservations from './routes/Reservations';
import Login from './routes/Login';
import Menu from './routes/Menu';
import Error from './routes/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App