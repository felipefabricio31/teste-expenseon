import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastNotify {
  constructor(public toastr: ToastrService) {}

  /*
       DEMO: https://ngx-toastr.netlify.app/ 
       API: https://www.npmjs.com/package/ngx-toastr
  */

  async showSuccess(msg, titulo) {
    // this.toastr.success(msg, titulo);
    await this.toastr.success('Teste', 'Teste');
  }

  msgSuccess2(mensagem, titulo) {
    this.toastr.success(mensagem, titulo);
  }

  msgErroSalvar() {
    this.toastr.error(
      'Erro ao salvar as informações, por favor, tente novamente. :( ',
      'Atenção!'
    );
  }
}