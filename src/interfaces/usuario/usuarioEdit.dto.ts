import type { PostagemResponseDTO } from '../postagem/postagemResponse.dto';

export interface UsuarioEditDTO {
  id: string;
  nome: string;
  email: string;
  perfil: { id: string, cargo: string };
  postagens?: PostagemResponseDTO[];
}
