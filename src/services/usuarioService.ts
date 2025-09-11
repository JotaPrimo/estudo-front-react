import api from './api';
import type { Usuario } from '../interfaces/usuario/usuario.interface';
import type { UsuarioCreateDTO } from '../interfaces/usuario/usuarioCreate.dto';

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

  atualizar: async (id: string, usuario: Usuario): Promise<Usuario> => {
    const response = await api.put<Usuario>(`/usuarios/${id}`, usuario);
    return response.data;
  },

  deletar: async (id: string): Promise<void> => {
    await api.delete(`/usuarios/${id}`);
  },
};
