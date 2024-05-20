import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Collection from './pages/Collection'
import Search from './pages/Search'

import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'

function App() {

  return (
    <div>
      <HeaderBar />
        <div>
          <Router>
            <Routes>
                <Route element={<Home />} path={'/'}></Route>
                <Route element={<Profile />} path='/profile'></Route>
                <Route element={<Collection />} path='/collection'></Route>
                <Route element={<Search />} path='/search'></Route>
            </Routes>
          </Router>
        </div>
      <FooterBar />
    </div>
  )
}

export default App
