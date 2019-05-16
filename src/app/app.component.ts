import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-root', // tag to be rendered
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-crud';
  name: string = 'Hacode';
  lastname: string;
  constructor() {
    this.lastname = 'Mantilla';
  }
}
