import { Component } from '@angular/core';
import { UserLoginUseCase } from 'src/app/domain/usecases/user-login.usecase';
import { UserModel } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userLoginUseCase: UserLoginUseCase) {}

  login(username: string, password: string) {
    this.userLoginUseCase.execute({ username, password }).subscribe((user: UserModel) => {
      console.log('User logged in:', user);
    });
  }
}
