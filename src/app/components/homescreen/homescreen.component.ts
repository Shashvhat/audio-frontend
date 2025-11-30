import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ConverterComponent } from '../converter/converter.component';

@Component({
  selector: 'app-homescreen',
  imports: [NavbarComponent, ConverterComponent],
  templateUrl: './homescreen.component.html',
  styleUrl: './homescreen.component.css',
})
export class HomescreenComponent {}
