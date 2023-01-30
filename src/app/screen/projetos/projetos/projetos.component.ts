import { Component, OnInit } from '@angular/core';
import { DadosController } from '../../../core/controllers/usuario/dados.controller';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
})
export class ProjetosComponent implements OnInit {
  sobreMim: any;

  constructor(private dadosController: DadosController) {}

  ngOnInit(): void {
    this.getSobreMim()
  }

  getSobreMim = () => (this.sobreMim = this.dadosController.getDadosSobre());
}
