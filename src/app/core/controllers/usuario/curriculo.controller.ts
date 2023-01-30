import { Injectable } from '@angular/core';
import { DadosService } from '../../services/sobre.service';
@Injectable({ providedIn: 'root' })
export class CurriculoController {
  constructor(private curriculoService: DadosService) {}

  getDadosSobre = () => this.curriculoService.getDadosCurriculo();

  getDadosMain = () => this.curriculoService.getDadosMain();
}
