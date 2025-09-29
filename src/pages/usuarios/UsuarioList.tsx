import React, { useEffect, useState } from 'react'
import type { Usuario } from '../../interfaces/usuario/usuario.interface'
import { usuarioService } from '../../services/usuarioService'
import LoadingData from '../../components/LoadingData'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import { alertService } from '../../services/alertService'

function UsuariosList() {

  const [usuarios, setUsuarios] = useState<Usuario[] | null>(null)

  useEffect(() => {
    carregarUsuarios()
  }, [])

  async function carregarUsuarios() {
    const data = await usuarioService.listar();
    setUsuarios(data)
  }

  async function deletar(usuario: Usuario) {
    const res = await alertService.confirm(`Deletar usuário ${usuario.nome}`, 'Deletar', 'Cancelar');


    if (res.isConfirmed) {
      await usuarioService.deletar(usuario.id)
      alertService.success("Registro deletado com sucesso");
      await carregarUsuarios();
    } else {
      alertService.info('Operação cancelada');
    }

  }

  if (!usuarios) {
    return <LoadingData />
  }

  return (
    <div>
      {usuarios && (
        <div className='card'>
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>Listagem de usuários</span>
            <Link className="btn btn-sm btn-primary" to={ROUTES.USUARIO.CREATE}>Novo</Link>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Cargo</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios?.map((usuario, index) => (
                  <tr key={index}>
                    <th scope="row">{usuario.id}</th>
                    <td>{usuario.nome}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario?.perfil?.cargo}</td>
                    <td>
                      <div className='d-flex gap-2 justify-content-center'>
                        <button className='btn btn-sm btn-info'>Ver</button>
                        <Link to={ROUTES.USUARIO.EDIT.replace(':id', String(usuario.id))} className='btn btn-sm btn-warning'>Editar</Link>
                        <button
                          onClick={() => deletar(usuario)}
                          className='btn btn-sm btn-danger'>
                          Deletar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsuariosList