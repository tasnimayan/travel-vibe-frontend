import { Provider } from 'react-redux'
import './assets/css/main.css'

import Router from './utils/Router'
import store from './redux/store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store = {store}>
      <Router />
      <ToastContainer 
        position='top-right'
        autoClose={3000}
        newestOnTop={true}
        pauseOnFocusLoss={false}
        closeOnClick
        pauseOnHover
      />
    </Provider>
  )
}

export default App
