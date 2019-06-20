import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../intefaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  friendId: number;
  friend: User;
  param = 'uid';

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService) {
    this.friendId = this.activateRoute.snapshot.params[this.param];
    this.userService.getUserById(this.friendId).valueChanges().subscribe(
      (data: User) => {
        this.friend = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}


}
