import React, { useEffect, useState } from 'react'
import { usuarioService } from '../../services/usuarioService';
import { useParams } from 'react-router-dom';
import type { Usuario } from '../../interfaces/usuario/usuario.interface';

const UsuarioView = () => {
  const { idUsuario } = useParams<{ idUsuario: string }>();
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  useEffect(() => {
    carregarUsuario();
  }, [idUsuario])

  async function carregarUsuario() {
    if (idUsuario) {
      const usuario = await usuarioService.buscarPorId(idUsuario ?? '');
      setUsuario(usuario);
    }
  }

  return (
    <div className='card'>
      <div className='card-header'>
        Visualizando dados de usuário
      </div>
      <div className='card-body row'>
        <div className='col-2 d-flex'>
          <img src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png" alt="" width={'60px'} height={'60px'} />
        </div>
        <div className='col-10 d-flex gap-5 align-items-center'>
          <span>ID {usuario?.id}</span>
          <span>Nome {usuario?.nome}</span>
          <span>Perfil {usuario?.perfil.cargo}</span>
        </div>
      </div>
    </div>
  )
}

export default UsuarioView