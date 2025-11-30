import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomescreenComponent } from './components/homescreen/homescreen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-check';
}
