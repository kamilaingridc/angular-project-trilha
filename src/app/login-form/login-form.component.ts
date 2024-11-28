import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'login-form', // Define o seletor do componente
  imports: [ReactiveFormsModule], // Declara que este componente usa formulários reativos
  templateUrl: './login-form.component.html', // HTML associado
  styleUrl: './login-form.component.css' // CSS associado
})
export class LoginFormComponent {

  // Injeta a dependência do FormBuilder utilizando o método 'inject'
  _fb = inject(FormBuilder);

  // Criação do FormGroup usando o FormBuilder
  login = this._fb.group({
    email: ["", Validators.required], // Campo 'email' com validação obrigatória
    senha: ["", Validators.required], // Campo 'senha' com validação obrigatória
  });

}
