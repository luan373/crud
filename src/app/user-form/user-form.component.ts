import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  titulo = 'Cadastrar Usuário';

  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      'nome': ''
    });
  }
  submitForm(value: any): void {
    console.log('Reactive Form Data: ');
    console.log(value);
  }
  ngOnInit() {
  }

}
