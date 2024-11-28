import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-item',          // Nome do componente para uso no HTML
  imports: [FormsModule],        // Importa o FormsModule para habilitar o ngModel
  templateUrl: './add-item.component.html', // HTML do componente
  styleUrl: './add-item.component.css'      // CSS do componente
})
export class AddItemComponent {

  // Propriedade que armazena o valor atual digitado
  currentItem: string = "";

  // Placeholder do campo de texto, recebido do componente pai
  @Input()
  placeholder: string = "";

  // Evento que envia o valor digitado para o componente pai
  @Output()
  onSendInput = new EventEmitter<string>();

  // Método acionado ao clicar no botão
  textSended() {
    this.sendInput(); // Reutiliza o método de envio
  }

  // Método acionado ao pressionar uma tecla
  textTyped(ev: KeyboardEvent) {
    // Verifica se a tecla pressionada foi "Enter"
    if (ev.key === "Enter") {
      this.sendInput(); // Envia o valor
    }
  }

  // Método genérico para emitir o valor e limpar o campo
  sendInput() {
    this.onSendInput.emit(this.currentItem); // Emite o valor do campo
    this.currentItem = ""; // Limpa o campo após o envio
  }
}
