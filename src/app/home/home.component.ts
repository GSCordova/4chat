import { Component, OnInit } from '@angular/core';
import { User } from '../intefaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    friends: User[];

    constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private router: Router,
      private snackBar: MatSnackBar) {
        this.userService.getUsers().valueChanges().subscribe(
          (data: User[]) => {
            this.friends = data;
          }, (error) => {
            console.log(error);
          }
        );
    }

    ngOnInit() {}

    logut() {
      this.authenticationService.logOut().then(() => {
        this.snackBar.open('Has cerrado sesión correctamente', 'Cerrar', {
          duration: 4000,
        });
        this.router.navigate(['login']);
      }).catch(() => {
        this.snackBar.open('Ha ocurrido un error al intentar cerrar sesión', 'Cerrar', {
          duration: 4000,
        });
      });
    }

}
