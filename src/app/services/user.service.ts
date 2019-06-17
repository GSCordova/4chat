import { Injectable } from '@angular/core';
import { User } from '../intefaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];

  usuario1: User = {
    nick: 'Eduardo',
    age: 24,
    email: 'ed@aoe.aoe',
    friend: true,
    uid: 1
  };
  usuario2: User = {
    nick: 'Freddy',
    age: 28,
    email: 'fred@aoe.aoe',
    friend: true,
    uid: 2
  };
  usuario3: User = {
    nick: 'Yuliana',
    age: 18,
    email: 'yuli@aoe.aoe',
    friend: true,
    uid: 3
  };
  usuario4: User = {
    nick: 'Ricardo',
    age: 17,
    email: 'rick@aoe.aoe',
    friend: false,
    uid: 4
  };
  usuario5: User = {
    nick: 'Marcos',
    age: 30,
    email: 'marcos@aoe.aoe',
    friend: false,
    uid: 5
  };

  constructor() {
    this.friends = [this.usuario1, this.usuario2, this.usuario3, this.usuario4, this.usuario5];
   }

  getFriends() {
    return this.friends;
  }

}
