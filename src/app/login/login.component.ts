import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = null;
  password: string = null;

  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  public logIn() {
    this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
      alert('Log correct');
      console.log('Data : ', data);
    }).catch((error) => {
      alert('Log error');
      console.log('Data : ', error);
    });
  }

  public register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then((data) => {
      alert('Register correct');
      console.log('Data : ', data);
    }).catch((error) => {
      alert('Register error');
      console.log('Data : ', error);
    });
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
