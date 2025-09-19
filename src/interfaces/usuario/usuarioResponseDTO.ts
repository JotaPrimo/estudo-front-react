import type { PerfilDTO } from "../perfil/PerfilDTO";

export interface UsuarioResponseDTO {
  id?: number;
  nome: string;
  email: string;
  perfil: PerfilDTO;
  postagens?: {
    id: number;
    titulo: string;
    conteudo: string;
    ativo: boolean;
  }[];
}
