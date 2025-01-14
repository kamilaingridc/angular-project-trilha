import { Pipe, PipeTransform } from '@angular/core';

export type Language = 'en' | 'pt';
export type Message = 'placeholder' | 'title';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  translations = {
    'en' : {
      'placeholder': 'add yours items here',
      'title': 'My TODO list'
    },
    'pt' : {
      'placeholder': 'Digite seu itens aqui',
      'title': 'Minha lista de afazeres'
    }
  }

  transform(message: Message, lang: Language): string {
    return this.translations[lang][message];
  }

}
