import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ToastrService } from 'ngx-toastr';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(
    private modalService: BsModalService,
    public toastr: ToastrService
  ) {}

  private showAlert(
    message: string,
    type: AlertTypes,
    dismissTimeout?: number
  ) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(
      ConfirmModalComponent
    );
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

  msgSucesso(msg) {
    this.toastr.success(msg, ' 👏 Parabéns!');
  }

  msgErro(error) {
    this.toastr.error(
      '🤦‍♂️  Erro ao salvar as informações, por favor, tente novamente. 😡',
      ' ⚠️ Atenção - Cód: ' + error.response.status + '⚠️'
    );
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // console.log(error.config);
    console.log(error.toJSON());
  }

  msgErroWithMensagem(error, msg) {
    let status =
      error.response.status === undefined ? 400 : error.response.status;
    this.toastr.error(
      '🤦‍♂️  ' + msg + '  😡',
      ' ⚠️ Atenção - Cód: ' + status + '⚠️'
    );
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // console.log(error.config);
    //console.log(error.toJSON());
  }

  msgErroPersonalizada(msg) {
    this.toastr.error(msg, ' ⚠️ Atenção!⚠️');
  }
}
