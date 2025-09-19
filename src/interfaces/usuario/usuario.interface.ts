import type { PerfilResponseDTO } from '../perfil/perfilResponse.dto';
import type { PostagemResponseDTO } from '../postagem/postagemResponse.dto';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  perfil: PerfilResponseDTO;
  postagens?: PostagemResponseDTO[];
}
