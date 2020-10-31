import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Web ExpenseOn';
  menuAtivo: string;

  constructor() {}

  async ngOnInit() {}

  // função para receber emit Output do Filho
  fecharMenu(menuAtivado) {
    // console.log('Recebe do pai --- Menu Ativo >>>> ', menuAtivado);
    this.menuAtivo = menuAtivado;
  }
}