import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User, UsersRoles} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.apiUrl + "users";

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUsersAll(): Observable<any> {
    return this.http.get(this.apiUrl + "/all");
  }

  getUserByID(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  setUser(user: User) {
    return this.http.post(this.apiUrl, user);
  }

  setUserRoles(userRole: UsersRoles) {
    return this.http.post(this.apiUrl, userRole);
  }

  updateUserById(id: number, user: User) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUserById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}