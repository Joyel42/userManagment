import { Component } from '@angular/core';
import { UserRegisterUseCase } from 'src/app/domain/usecases/user-register.usecase';
import { UserModel } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userRegisterUseCase: UserRegisterUseCase) {}

  register(phoneNum: string, password: string) {
    this.userRegisterUseCase.execute({ phoneNum, password }).subscribe((user: UserModel) => {
      console.log('User registered:', user);
    });
  }
}
