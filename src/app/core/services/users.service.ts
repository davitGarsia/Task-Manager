import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User, UsersRoles } from '../interfaces';
import { Observable } from 'rxjs';
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
createUser(user: User){
    return this.post('/users', user)
  }

  getUsers(): Observable<any> {
    return this.get('users');
  }

  getUsersAll(): Observable<any> {
    return this.get('users/all');
  }

  getUserByID(id: number) {
    return this.get(`users/${id}`);
  }

  setUser(user: any) {
    return this.post('users', user);
  }

  setUserRoles(userRole: UsersRoles) {
    return this.post('users/roles', userRole);
  }

  updateUserById(id: number, user: User) {
    return this.put(`users/${id}`, user);
  }

  deleteUserById(id: number) {
    return this.delete(`users/${id}`);
  }
}
