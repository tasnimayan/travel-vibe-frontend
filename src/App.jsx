import { Provider } from 'react-redux'
import './App.css'

import NavBar from './components/NavBar'
import Router from './utils/Router'
import store from './redux/store/store'

function App() {


  return (
    <Provider store = {store}>
      <NavBar />
      <Router />
    </Provider>
  )
}

export default App
