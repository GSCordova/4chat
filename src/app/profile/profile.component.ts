import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService) {
      this.authenticationService.getStatus().subscribe((data) => {
        this.userService.getUserById(data.uid).valueChanges().subscribe((data3: User) => {
            this.user = data3;
            console.log(this.user);
          }, (error) => {
            console.log(error);
          }
        );
      }, (error) => {
        console.log(error);
      });
     }

  ngOnInit() {}

}
