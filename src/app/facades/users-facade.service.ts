import {Injectable} from '@angular/core';
import {UsersService} from "../users.service";
import {Observable} from "rxjs";
import {User, UsersRoles} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {

  constructor(
    private userService: UsersService
  ) {
  }

  getUsers() {
    this.userService.getUsers();
  }

  getUsersAll() {
    this.userService.getUsersAll();
  }

  getUserByID(id: number) {
    this.userService.getUserByID(id);
  }

  setUser(user: User) {
    this.userService.setUser(user);
  }

  setUserRoles(userRole: UsersRoles) {
    this.userService.setUserRoles(userRole);
  }

  updateUserById(id: number, user: User) {
    this.userService.updateUserById(id, user)
  }

  deleteUserById(id: number) {
    this.userService.deleteUserById(id);
  }

}
