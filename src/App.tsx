import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../routes'
import UsuariosList from './pages/usuarios/UsuariosList'
import PerfilList from './pages/perfis/PerfilList'
import NavMenu from './components/NavMenu'

function App() {

  return (
    <>
      <NavMenu />
      <Routes>
        <Route path={ROUTES.USUARIO} element={<UsuariosList />} />
        <Route path={ROUTES.PERFIL} element={<PerfilList />} />
      </Routes>
    </>
  )
}

export default App
