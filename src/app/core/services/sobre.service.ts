import {
  dadosSobre,
  dadosMain,
  dadosCurriculo,
} from 'src/app/components/template-simple/template-dados-sobre.type';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class DadosService {
  constructor() {}

  getDadosSobre() {
    return dadosSobre;
  }
  getDadosMain() {
    return dadosMain;
  }
  getDadosCurriculo() {
    return dadosCurriculo;
  }
}
