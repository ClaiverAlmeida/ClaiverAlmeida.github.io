import { Component, OnInit } from '@angular/core';
import { dadosSobre } from 'src/app/components/template-simple/template-dados-sobre.type';
import { DadosController } from '../../../core/controllers/usuario/dados.controller';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
})
export class SobreComponent implements OnInit {
  sobreMim: any;

  constructor(private dadosController: DadosController) {}

  ngOnInit(): void {
    this.getSobreMim()
  }

  getSobreMim = () => (this.sobreMim = this.dadosController.getDadosSobre());
}
