import type { Perfil } from "../interfaces/perfil/Perfil.interface";
import type { PerfilCreateDTO } from "../interfaces/perfil/PerfilCreateDTO";
import type { PerfilEditDTO } from "../interfaces/perfil/PerfilEditDTO";
import type { PerfilResponseDTO } from "../interfaces/perfil/perfilResponse.dto";
import api from "./api";

export const perfilService = {
  listar: async (): Promise<PerfilResponseDTO[]> => {
    const response = await api.get<PerfilResponseDTO[]>('/perfis');
    return response.data;
  },

  buscarPorId: async (id: string): Promise<PerfilResponseDTO> => {
    const response = await api.get<PerfilResponseDTO>(`/perfis/${id}`);
    return response.data;
  },

  criar: async (perfil: PerfilCreateDTO): Promise<PerfilCreateDTO> => {
    const response = await api.post<PerfilCreateDTO>(`/perfis`, perfil);
    return response.data;
  },

  atualizar: async (id: string, perfil: PerfilEditDTO): Promise<PerfilEditDTO> => {
    const response = await api.put<PerfilEditDTO>(`/perfis/${id}`, perfil);
    return response.data;
  },

  deletar: async (id: string): Promise<void> => {
    await api.delete(`/perfis/${id}`);
  },
}