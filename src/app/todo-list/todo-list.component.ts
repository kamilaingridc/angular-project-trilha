import { Component } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import { Language, TranslatePipe } from '../translate.pipe';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'todo-list', // como vou chamar o componente
  imports: [ AddItemComponent, TranslatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe ],  // coloca a primeira letra maiuscula
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  title: string = "Aula de angular"
  placeholder: string = "Digite algo para fazer"
  items: string[] = []
  lang: Language = 'en';

  addItem(ev: string){
    this.items.push(ev);
  }

  alterarLang(){
    if(this.lang === 'en')
      this.lang = 'pt';
    else this.lang = 'en'
  }
}
