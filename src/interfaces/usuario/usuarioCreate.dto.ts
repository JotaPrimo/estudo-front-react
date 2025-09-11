import type { PerfilResponseDTO } from '../perfil/perfilResponse.dto';
import type { PostagemResponseDTO } from '../postagem/postagemResponse.dto';

export interface UsuarioCreateDTO {
  nome: string;
  email: string;
  perfil: { id: string };
  postagens?: PostagemResponseDTO[];
}
