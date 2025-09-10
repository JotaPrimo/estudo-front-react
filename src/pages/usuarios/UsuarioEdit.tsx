import React, { useEffect, useState } from 'react'
import type { Usuario } from '../../interfaces/usuario/usuario.interface'
import LoadingData from '../../components/LoadingData'
import { useParams } from 'react-router-dom';
import { usuarioService } from '../../services/usuarioService';

const UsuarioEdit = () => {

  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  useEffect(() => {
    carregarUsuario()
  }, [])

  async function carregarUsuario() {
    if (id) {
      const usuario = await usuarioService.buscarPorId(id);
      setUsuario(usuario)
    }
  }

  if (usuario == null) <LoadingData />

  return (
    <div>
      {usuario && (
        <div className='card'>
          <div className="card-header">Dados do usuario</div>
          <div className="card-body">
            <form action="">
              <div className="d-flex  gap-2 mt-5">
              <div className="col d-flex flex-column align-items-start">
                  <label htmlFor="formFile" className="form-label text-start">Default file input example</label>
                  <input className="form-control" type="text" id="formFile" placeholder='Informe o'></input>
                </div>
                 <div className="col d-flex flex-column align-items-start">
                  <label htmlFor="formFile" className="form-label">Default file input example</label>
                  <input className="form-control" type="text" id="formFile" placeholder='Informe o'></input>
                </div>
               <div className="col d-flex flex-column align-items-start">
                  <label htmlFor="formFile" className="form-label">Default file input example</label>
                  <input className="form-control" type="text" id="formFile" placeholder='Informe o'></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsuarioEdit