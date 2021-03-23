import { Perfil } from './perfil';

export class Usuario {
  id = 0;
  nome = '';
  email = '';
  senha = '';
  idPerfil = 0;
  perfis: Perfil;
}

export class UsuarioLogin {
  email = '';
  senha = '';
}
