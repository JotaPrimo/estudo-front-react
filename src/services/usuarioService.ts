import api from './api';
import type { Usuario } from '../interfaces/usuario/usuario.interface';
import type { UsuarioCreateDTO } from '../interfaces/usuario/usuarioCreate.dto';
import type { UsuarioEditDTO } from '../interfaces/usuario/usuarioEdit.dto';
import type { UsuarioResponseDTO } from '../interfaces/usuario/usuarioResponseDTO';

export const usuarioService = {
  listar: async (): Promise<Usuario[]> => {
    const response = await api.get<Usuario[]>('/usuarios');
    return response.data;
  },

  buscarPorId: async (id: string): Promise<Usuario> => {
    const response = await api.get<Usuario>(`/usuarios/${id}`);
    return response.data;
  },

  criar: async (usuario: UsuarioCreateDTO): Promise<Usuario> => {
    const response = await api.post<Usuario>(`/usuarios`, usuario);
    return response.data;
  },

  atualizar: async (usuario: UsuarioEditDTO): Promise<UsuarioResponseDTO> => {
    console.log("atualizar data:", usuario);
    const response = await api.put<UsuarioResponseDTO>(`/usuarios/${usuario.id}`, usuario);
    return response.data;
  },

  deletar: async (id: number): Promise<void> => {
    await api.delete(`/usuarios/${id}`);
  },
};
