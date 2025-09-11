import type { PostagemResponseDTO } from '../postagem/postagemResponse.dto';

export interface UsuarioEditDTO {
  id: number;
  nome: string;
  email: string;
  perfil: { id: string };
  postagens?: PostagemResponseDTO[];
}
