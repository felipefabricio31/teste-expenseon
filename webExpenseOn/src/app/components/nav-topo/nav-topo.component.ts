import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-topo',
  templateUrl: './nav-topo.component.html',
  styleUrls: ['./nav-topo.component.css'],
})
export class NavTopoComponent implements OnInit {
  //
  dadosAcesso: any;
  nomeUsuario: string = 'Felipe Souza';
  //
  fecharMenu: boolean = false;
  //
  @Output() fecharMenuToPai = new EventEmitter();
  //
  constructor() {}

  ngOnInit(): void {
    this.nomeUsuario = 'Felipe Souza';
  }
  //
  FecharMenu() {
    this.fecharMenu = this.fecharMenu == true ? false : true;

    this.fecharMenu == true
      ? this.fecharMenuToPai.emit('active')
      : this.fecharMenuToPai.emit('no-active');
  }
}