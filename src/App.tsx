import './css/App.css'
import FrontPage from './components/FrontPage'
import { Routes, Route } from 'react-router-dom'
import FavouriteQuotes from './components/FavouritesQuotes'
import Navbar from './components/parts/NavBar'

const App: React.FC = (): React.ReactElement => {

  return (
    <div>
      <Navbar /> 
      <div className='appContainer'>          
        <h1 className='header'>Quotes</h1>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/favourites' element={<FavouriteQuotes />} />
        </Routes>
      </div>
    </div>
  )

}

export default App
