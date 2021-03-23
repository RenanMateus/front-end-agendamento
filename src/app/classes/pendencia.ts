import { PendenciaEnum } from '../enumeradores/pendencia.enum';
import { Cliente } from './cliente';

export class Pendencia {
  id = 0;
  nome = '';
  descricao = '';
  situacao: PendenciaEnum = 0;
  idCliente: number;
  clientes: Cliente;
}
