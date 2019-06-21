import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { User } from '../intefaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginState = 'register';
  email: string = null;
  password: string = null;
  nick: string = null;
  friends: User[];
  hide = true;
  manolo = true;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) { }

  public logIn() {
    this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
      alert('Logeado Correctamente');
      console.log('Data : ', data);
      this.router.navigate(['home']);
    }).catch((error) => {
      alert('Ha ocurrido un error');
      console.log('Data : ', error);
    });
  }

  public register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then((data) => {
      const user = {
        uid: data.user.uid,
        email: this.email,
        nick: this.nick
      };

      this.router.navigate(['home']);

      this.userService.createUser(user).then((data2) => {
        alert('Register correct');
        console.log('Data : ', data2);
      }).catch((error2) => {
        console.log('Error2 ', error2);
      });

    }).catch((error) => {
      console.log('Error: ', error);
    });
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
