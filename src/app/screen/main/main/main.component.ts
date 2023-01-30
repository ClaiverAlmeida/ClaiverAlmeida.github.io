import { Component,  OnInit } from '@angular/core';
import { DadosController } from '../../../core/controllers/usuario/dados.controller';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  dados: any;

  constructor(
    private dadosController: DadosController
  ) {}

  ngOnInit(): void {
    this.dados = this.dadosController.getDadosMain();
  }


}
