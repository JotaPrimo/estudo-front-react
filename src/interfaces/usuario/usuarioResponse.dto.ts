export interface UsuarioResponseDTO {
  id?: number;
  nome: string;
  email: string;
  perfil?: {
    id: number;
    cargo: string;
    departamento: string;
    ativo: boolean;
  };
  postagens?: {
    id: number;
    titulo: string;
    conteudo: string;
    ativo: boolean;
  }[];
}
