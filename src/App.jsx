import { Provider } from 'react-redux'
import './assets/css/main.css'

import Router from './utils/Router'
import store from './redux/store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from './layout/DashboardLayout'

function App() {
  return (
    <Provider store = {store}>
      <DashboardLayout>
        <Router />
        <ToastContainer 
          position='top-right'
          autoClose={3000}
          newestOnTop={true}
          pauseOnFocusLoss={false}
          closeOnClick
          pauseOnHover
        />
      </DashboardLayout>
    </Provider>
  )
}

export default App
