import { Component } from '@angular/core';
import { MainPageComponent } from "./main-page/main-page.component";

@Component({
  selector: 'app-root',
  imports: [MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exemple';
}