import { ToastContainer } from 'react-toastify'
import './App.css'
import NavMenu from './components/NavMenu'
import RouterRoutes from './components/RouterRoutes'

function App() {

  return (
    <>
      <NavMenu />
      <ToastContainer />
      <RouterRoutes />
    </>
  )
}

export default App
