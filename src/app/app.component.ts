import { Component } from '@angular/core';
import { slideInAnimation } from './components/template-simple/slideInAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Portfolio';
}
