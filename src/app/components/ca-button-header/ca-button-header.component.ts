import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-button-header',
  templateUrl: './ca-button-header.component.html',
})
export class CaButtonHeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() ordem: string = "default";
  @Input() rota: string = "";
  @Input() icon: string = "";

  constructor() {}

  ngOnInit(): void {}
}
