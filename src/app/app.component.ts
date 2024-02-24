import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto5';
  nombre = 'Ezequiel Anchia';
  edad = 37;
  sueldos = [1700, 1600, 1900];
}
