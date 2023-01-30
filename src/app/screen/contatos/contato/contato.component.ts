import { Component, HostListener, OnInit } from '@angular/core';
import { DadosController } from '../../../core/controllers/usuario/dados.controller';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
})
export class ContatoComponent implements OnInit {

  constructor(
    private dadosController: DadosController
  ) {}

  ngOnInit(): void {
  }

}
