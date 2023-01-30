import { Component, OnInit } from '@angular/core';
import { DadosController } from 'src/app/core/controllers/usuario/dados.controller';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
})
export class CurriculoComponent implements OnInit {
  curriculo: any[] = [];
  mobile: boolean = false;
  hdResolution: boolean = false;

  constructor(private dadosController: DadosController) {}

  ngOnInit(): void {
    this.getCurriculo();
  }

  getCurriculo = () => {
    this.curriculo = this.dadosController.getDadosCurriculo();
  };
}
