import { AgendamentoEnum } from '../enumeradores/agendamento.enum';
import { Cliente } from './cliente';
import { Usuario } from './usuario';

export class Agendamento {
  id = 0;
  inicio: any = '';
  situacao: AgendamentoEnum = 0;
  idUsuario = 0;
  idCliente = 0;
  solicitante = '';
  descricao = '';
  motivoCancelamento: string;
  atendimento: string;
  clientes: Cliente;
  usuarios: Usuario;
}
