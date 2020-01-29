import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { User } from '../intefaces/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginState = 'login';
  public email: string = null;
  public password: string = null;
  public nick: string = null;
  public friends: User[];
  public hide = true;
  public manolo = true;
  public matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private snackBar: MatSnackBar) { }

  public logIn() {
    this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
      console.log('Data : ', data);
      this.snackBar.open('Has iniciado sesión correctamente', 'Cerrar', {
        duration: 4000,
      });
      this.router.navigate(['home']);
    }).catch((error) => {
      console.log('Data : ', error);
      this.snackBar.open('Ha ocurrido un error al intentar iniciar sesión', 'Cerrar', {
        duration: 4000,
      });
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
