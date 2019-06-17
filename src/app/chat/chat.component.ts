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
  friends: User[];
  param = 'uid';
  friend: any;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    this.friends = this.userService.getFriends();
    this.friendId = this.activateRoute.snapshot.params[this.param];

    this.friend = this.getUserById(this.friendId);

  }

  ngOnInit() {}

  getUserById(friendId: number) {
    return this.friends.find(friend => friend.uid == friendId);
  }

}
