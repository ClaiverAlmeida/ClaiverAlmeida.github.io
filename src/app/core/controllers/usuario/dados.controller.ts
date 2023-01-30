import { Injectable } from '@angular/core';
import { DadosService } from '../../services/sobre.service';
@Injectable({ providedIn: 'root' })
export class DadosController {
  constructor(private dadosService: DadosService) {}

  getDadosSobre = () => this.dadosService.getDadosSobre();

  getDadosMain = () => this.dadosService.getDadosMain();

  getDadosCurriculo = () => this.dadosService.getDadosCurriculo();
}
