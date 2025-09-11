
import UsuariosList from '../pages/usuarios/UsuarioList'
import UsuariosCreate from '../pages/usuarios/UsuarioCreate'
import UsuarioEdit from '../pages/usuarios/UsuarioEdit'
import UsuarioView from '../pages/usuarios/UsuarioView'
import PerfilList from '../pages/perfis/PerfilList'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../routes'

function RouterRoutes() {
  return (
    <Routes>
        <Route path={ROUTES.USUARIO.BASE} element={<UsuariosList />} />
        <Route path={ROUTES.USUARIO.CREATE} element={<UsuariosCreate />} />
        <Route path={ROUTES.USUARIO.EDIT} element={<UsuarioEdit />} />
        <Route path={ROUTES.USUARIO.VIEW} element={<UsuarioView />} />

        <Route path={ROUTES.PERFIL} element={<PerfilList />} />
      </Routes>
  )
}

export default RouterRoutes