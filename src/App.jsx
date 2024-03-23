import { Provider } from 'react-redux'
import './assets/css/main.css'

import Router from './utils/Router'
import store from './redux/store/store'

function App() {
  return (
    <Provider store = {store}>
      <Router />
    </Provider>
  )
}

export default App
