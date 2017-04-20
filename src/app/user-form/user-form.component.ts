import { User } from './shared/User';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  providers: [UserService],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  titulo = 'Cadastrar Usuário';

  userForm: FormGroup;

  user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser().subscribe(data => this.user = data);
  }

  submitForm(value: any): void {
    console.log('Reactive Form Data: ');
    console.log(value);
  }


}
