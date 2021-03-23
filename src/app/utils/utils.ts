import Swal from 'sweetalert2';

export const Utils = {
  validaCpfCnpj(cpfCnpj: string) {
    if (cpfCnpj.length === 11) {
      if (cpfCnpj === '00000000000' || cpfCnpj === '11111111111' || cpfCnpj === '22222222222'
        || cpfCnpj === '33333333333' || cpfCnpj === '44444444444' || cpfCnpj === '55555555555'
        || cpfCnpj === '66666666666' || cpfCnpj === '77777777777' || cpfCnpj === '88888888888' || cpfCnpj === '99999999999') {
        return false;
      }
      let soma = 0;
      let resto;
      for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpfCnpj.substring(i - 1, i)) * (11 - i);
      }
      resto = (soma * 10) % 11;
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
      if (resto !== parseInt(cpfCnpj.substring(9, 10))) {
        return false;
      }
      soma = 0;
      for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpfCnpj.substring(i - 1, i)) * (12 - i);
      }
      resto = (soma * 10) % 11;
      if ((resto === 10) || (resto === 11)) { resto = 0; }
      if (resto !== parseInt(cpfCnpj.substring(10, 11))) {
        return false;
      }
      return true;
    }
    if (cpfCnpj.length === 14) {
      if (cpfCnpj === '') {
        return false;
      }
      if (parseInt(cpfCnpj, 10) === 0) {
        return false;
      } else {
        let g = cpfCnpj.length - 2;
        if (this.validarCNPJTmp(cpfCnpj, g) === 1) {
          g = cpfCnpj.length - 1;
          if (this.validarCNPJTmp(cpfCnpj, g) === 1) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  },

  validarCNPJTmp(a, d) {
    let b = 0;
    let e = 2;
    for (let f = d; f > 0; f--) {
      b += parseInt(a.charAt(f - 1), 10) * e;
      if (e > 8) {
        e = 2;
      } else {
        e++;
      }
    }
    b %= 11;
    if (b === 0 || b === 1) {
      b = 0;
    } else {
      b = 11 - b;
    }
    if (b !== parseInt(a.charAt(d), 10)) {
      return (0);
    } else {
      return (1);
    }
  },

  mascararCpfCnpj(cpfCnpj: string) {
    if (cpfCnpj.length === 11) {
      return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
    } else {
      return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '\$1.\$2.\$3\/\$4\-\$5');
    }
  },

  obterHoraAtual() {
    return (
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
        new Date().getHours() - 3, new Date().getMinutes()).toISOString().slice(0, 16)
    );
  },

  usuarioSemPermissao() {
    Swal.fire(<any>{
      icon: 'error',
      title: 'Você não tem permissão para realizar essa funcionalidade',
      showCancelButton: false,
      confirmButtonText: 'OK'
    });
  },

  verificarPermissao(codigo: string, permissoes: any): boolean {
    let permissao: boolean;
    permissoes.map(element => {
      if (element.codigo === codigo) {
        permissao = true;
      }
    });
    if (permissao) {
      return permissao;
    }
  }
};
