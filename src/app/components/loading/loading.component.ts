import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  hidden: boolean = false;
  @Input() desenvolvimento: boolean = false;
  constructor() {}
  ngOnInit(): void {
    if (!this.desenvolvimento) {
      setTimeout(() => {
        this.hidden = true;
      }, 3000);
    }
  }
}
