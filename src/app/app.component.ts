import { Component } from '@angular/core';
import { MainPageComponent } from "./main-page/main-page.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  imports: [MainPageComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exemple';
}
