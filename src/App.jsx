import { Provider } from 'react-redux'
import './App.css'

import Router from './utils/Router'
import store from './redux/store/store'
import NavBar from './components/NavBar'

function App() {


  return (
    <Provider store = {store}>
      <NavBar />
      <Router />
    </Provider>
  )
}

export default App
