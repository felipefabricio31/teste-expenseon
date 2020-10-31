
import { Component, OnInit, ViewChild } from '@angular/core';
import { EMPTY } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  EmailValidator,
} from '@angular/forms';
import { AlertModalService} from 'src/app/shared/alert-modal.service';
import { take, switchMap } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HotelServices } from 'src/services/hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
//
@ViewChild('closebutton') closebutton;
//
filter: '';
//
listaHotelFiltrados: any;
qtdListaHotelFiltrados: number = 0;
//
currentRate: number = 9;
//
hotelFiltroSelecionada: any;
listaHoteis: [];
nomeHotelSelecionado: string;
//
editarModal: boolean;
disabledBtn: boolean = true;
editarHotel: boolean = false;
//
hotelId: number;
tituloModal: string;
//
dataNascimento: any;

//Validação do formulário (forma mais correta)
public formulario: FormGroup = new FormGroup({
  NomeHotel: new FormControl('', Validators.required),
  DescricaoHotel: new FormControl('', null),
  Logradouro: new FormControl('', null),
  Cep: new FormControl('', null),
  Uf: new FormControl('', null),
  Numero: new FormControl('', null),
  Cidade: new FormControl('', null),
  Bairro: new FormControl('', null),
  Avaliacao: new FormControl(0, null),
  Comodidade: new FormControl('', null),
  Observacao: new FormControl('', null),
});
//
constructor(
  private alertService: AlertModalService,
  public hotelServices: HotelServices,
  private loadingBar: LoadingBarService
) {}

async ngOnInit() {
  this.editarHotel = false;
  await this.getTodosHoteis();
}

async getTodosHoteis() {
  await this.hotelServices.getAll().then((response) => {
    this.listaHoteis = response.data;

    this.listaHotelFiltrados = this.listaHoteis;
    this.qtdListaHotelFiltrados = this.listaHoteis.length;
  });
}

LimparFormulario() {
  // this.hotelId = 0;
  this.formulario.setValue({
    NomeHotel: '',
    DescricaoHotel: '',
    Observacao: '',
    Avaliacao: 0,
    Comodidade: '',
    Logradouro: '',
    Cep: '',
    Numero: null,
    Cidade: '',
    Bairro: '',
    Uf: ''
  });
}

btnEditarDados(item, editarModal) {
  this.loadingBar.start(40);

  this.LimparFormulario();

  this.editarModal = editarModal;
  this.editarHotel = this.editarModal ? true : false;
  this.tituloModal = this.editarModal ? 'Editar Hotel' : 'Hotel';

  this.hotelId = item.hotelId;

  this.formulario.setValue({
    NomeHotel: item.nomeHotel,
    DescricaoHotel: item.descricao,
    Avaliacao: item.avaliacao,
    Comodidade: item.comodidade,
    Observacao: item.observacao,
    Logradouro: item.logradouro,
    Cep: item.cep,
    Uf: item.uf,
    Numero: item.numero,
    Cidade: item.cidade,
    Bairro: item.bairro
  });

  this.loadingBar.complete();
}
//

AbrirNovoModal() {
  this.loadingBar.start(40);

  this.editarHotel = false;
  this.editarModal = true;

  this.tituloModal = 'Novo Hotel';

  this.LimparFormulario();

  this.loadingBar.complete();
}

SalvarHotel() {
  this.loadingBar.start(40);

  if (this.editarHotel === true) {
    //
    this.updateHotel();
    //
  } else {
    this.postHotel();
  }

  this.loadingBar.complete();
}

async postHotel() {

  let uf = this.formulario.value.Uf == "null" ? "": this.formulario.value.Uf;

  let postData = {
    NomeHotel: '' + this.formulario.value.NomeHotel + '',
    Descricao: '' + this.formulario.value.DescricaoHotel + '',
    Comodidade: '' + this.formulario.value.Comodidade + '',
    Avaliacao:  this.formulario.value.Avaliacao ,
    Observacao: '' + this.formulario.value.Observacao + '',
    Logradouro: '' + this.formulario.value.Logradouro + '',
    Cep: '' + this.formulario.value.Cep + '',
    Uf: '' + uf + '',
    Numero:  this.formulario.value.Numero ,
    Cidade: '' + this.formulario.value.Cidade + '',
    Bairro: '' + this.formulario.value.Bairro + '',
    Ativo: true,
  };
  // console.log(postData);
  await this.hotelServices
    .postHotel(postData)
    .then((response) => {
      if (response.status === 200) {
        this.closebutton.nativeElement.click();

        this.alertService.msgSucesso('🎉 Dados salvos com sucesso! 🎉');

        this.getTodosHoteis();
      }
    })
    .catch((error) => {
      this.alertService.msgErro(error);
    });
}

async updateHotel() {

  let uf = this.formulario.value.Uf == "null" ? "": this.formulario.value.Uf;
  
  let postData = {
    HotelId: this.hotelId,
    NomeHotel: '' + this.formulario.value.NomeHotel + '',
    Descricao: '' + this.formulario.value.DescricaoHotel + '',
    Comodidade: '' + this.formulario.value.Comodidade + '',
    Avaliacao:  this.formulario.value.Avaliacao ,
    Observacao: '' + this.formulario.value.Observacao + '',
    Ativo: true,
    Logradouro: '' + this.formulario.value.Logradouro + '',
    Cep: '' + this.formulario.value.Cep + '',
    Uf: '' + uf + '',
    Numero:  this.formulario.value.Numero ,
    Cidade: '' + this.formulario.value.Cidade + '',
    Bairro: '' + this.formulario.value.Bairro + ''
  };

  console.log(postData);

  await this.hotelServices
    .updateHotel(postData)
    .then((response) => {
      if (response.status === 200) {
        //
        this.closebutton.nativeElement.click();
        //
        this.alertService.msgSucesso('🎉 Dados salvos com sucesso! 🎉');
        //
        this.getTodosHoteis();
      }
    })
    .catch((error) => {
      this.alertService.msgErro(error);
    });
  } 

  async deleteHotel(hotelId) {
    this.loadingBar.start(40);

    await this.hotelServices
      .deleteHotel(hotelId)
      .then((response) => {
        if (response.status === 200) {
          //
          this.closebutton.nativeElement.click();
          //
          this.alertService.msgSucesso(
            '🎉 Hotel removido com sucesso! 🎉'
          );
          //
          this.getTodosHoteis();
        }
      })
      .catch((error) => {
        this.alertService.msgErro(error);
      });

    this.loadingBar.complete();
  }

  onDelete(hotelId) {
    const result$ = this.alertService.showConfirm(
      '⚠️Confirmação⚠️',
      'Tem certeza que deseja remover este Hotel❓',
      'Sim'
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.deleteHotel(hotelId) : EMPTY
        )
      )
      .subscribe(
        (success) => {
          this.getTodosHoteis();
        },
        (error) => {
          let msg =
            '🤦‍♂️  Erro ao deletar hotel, por favor, tente novamente. 😡';
          this.alertService.msgErroPersonalizada(msg);
        }
      );
  }
}